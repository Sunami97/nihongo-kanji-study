  export const convertChapterName = (id: string) => {
    const number = id.replace('chapter', '');
    return `${number}장`;
  };