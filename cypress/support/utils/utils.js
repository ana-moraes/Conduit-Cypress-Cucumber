class Utils {
  generateTimestamp() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const formattedDateTime = `${day}-${month + 1}-${year} ${hour}:${minute}:${second}`;

    return formattedDateTime;
  }
}

export default Utils;
