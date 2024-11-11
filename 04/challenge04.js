function findTheKiller(whisper, suspects) {
  const resultArr = [];

  const endsWithDollar = whisper.endsWith("$");
  const whisperLength = endsWithDollar ? whisper.length - 1 : whisper.length;

  for (const suspect of suspects) {
    const suspectName = suspect.split(" ")[0].toLowerCase();

    if (endsWithDollar && whisperLength !== suspectName.length) {
      continue; // Skip if lengths don't match
    }

    let isMatch = true;
    for (let j = 0; j < whisperLength; j++) {
      if (whisper[j] !== "~" && suspectName[j] !== whisper[j]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      resultArr.push(suspect);
    }
  }

  return resultArr.length > 0 ? resultArr.join(",") : "";
}
