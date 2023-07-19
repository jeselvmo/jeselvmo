type UploadStartDetail = {
  percent: number;
  status: string;
};

type UploadProgressDetail = {
  percent: number;
  status: string;
  start: number;
  end: number;
  length: number;
  data: string;
  next: () => void;
};

type UploadOptions = {
  chunkSize?: number; // 每次读取1MB
  onstart?: (detail: UploadStartDetail) => void;
  onprogress?: (detail: UploadProgressDetail) => void;
  onerror?: (error: Error) => void;
};

/**
 * Large file sharding upload.
 *
 * @since 3.0.0
 * @category Utils
 * @param {Blob} file The file to upload.
 * @param {number} [offset] The starting position to upload.
 * @param {ProgressFunc} start The callback method during the upload process.
 * @returns {void}
 * @example
 *
 * // 从头上传
 * uploadFile(file, {
 *   onstart: ({ percent, status}) => {
 *     // 开始的准备工作，比如设置进度条初始位置
 *   },
 *   onprogress: ({ percent, status, next }) => {
 *     console.log('percent, status:', percent, status);
 *
 *     // 执行下一分块的上传
 *     next();
 *   },
 *   onerror: (error) => {},
 * });
 *
 * // 断点续传，从指定位置上传
 * uploadFile(file, 20480, {
 *   onstart: ({ percent, status}) => {},
 *   onprogress: ({ percent, status, next }) => {},
 *   onerror: (error) => {},
 * });
 *
 */
function uploadFile(file: Blob, options: UploadOptions);
function uploadFile(file: Blob, offset: number, options: UploadOptions);
function uploadFile(file: Blob, ...args: Array<number | UploadOptions>) {
  let offset: number = 0;
  let options: UploadOptions = {};

  switch (args.length) {
    case 1:
      if (typeof args[0] === 'number') {
        offset = args[0];
      } else if (typeof args[0] === 'object') {
        options = Object.assign({}, options, args[0]);
      } else {
        throw new Error('parameter error');
      }
      break;
    case 2:
      if (typeof args[0] === 'number' && typeof args[1] === 'object') {
        offset = args[0];
        options = Object.assign({}, options, args[1]);
      } else {
        throw new Error('parameter error');
      }
      break;
    default:
      throw new Error('parameter error');
      break;
  }

  const blobSlice = Blob.prototype.slice;
  const chunkSize = options.chunkSize || 1048576; // 每次读取1MB
  let start = offset || 0;

  // start event
  if (options.onstart) {
    options.onstart({
      percent: Math.round((start / file.size) * 100),
      status: 'uploading',
    });
  }

  const loadNext = () => {
    const fileReader = new FileReader();
    const end = start + chunkSize >= file.size ? file.size : start + chunkSize;
    fileReader.readAsDataURL(blobSlice.call(file, start, end));
    fileReader.onload = (e: any) => {
      if (end <= file.size) {
        // progress event
        if (options.onprogress) {
          options.onprogress({
            percent: Math.round((end / file.size) * 100),
            status: end < file.size ? 'uploading' : 'done',
            start,
            end: end,
            length: end - start,
            data: e.target.result,
            next: () => {
              if (start !== end) {
                start = end;
                loadNext();
              }
            },
          });
        }
      }
    };
    fileReader.onerror = () => {
      // error event
      if (options.onerror) {
        options.onerror(new Error('read error.'));
      }
    };
  };

  loadNext();
}

export default uploadFile;
