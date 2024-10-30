function findTheKiller(whisper, suspects) {
  result = "";
  resultArr = [];

  let whisperLength = whisper.length - (whisper.endsWith("$") ? 1 : 0);

  for (let i = 0; i < suspects.length; i++) {
    let suspectName = suspects[i].split(" ")[0].toLowerCase();
    let isMatch = true;

    if (whisper.endsWith("$") && whisperLength !== suspectName.length) {
      isMatch = false;
    } else {
      for (let j = 0; j < whisperLength; j++) {
        if (whisper[j] !== "~" && suspectName[j] !== whisper[j]) {
          isMatch = false;
          break;
        }
      }
    }

    if (isMatch) resultArr.push(suspects[i]);
  }

  if (resultArr.length > 0) {
    result = resultArr.join(",");
  }

  return result;
}
