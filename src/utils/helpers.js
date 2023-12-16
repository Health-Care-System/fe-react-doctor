export const formatNumber = (num) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + 'B';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + 'M';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + 'K';
  }
  return num;
};

export const formattedDate = (date) => {
  const utc = new Date(date);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  const formattedDate = utc.toLocaleDateString('ID-id', options);
  return formattedDate;
}

export const convertPatientStatus = (text) => {
  const statusMappings = {
    'dirujuk': 'referred',
    'diberi': 'recovered',
    'diberi resep': 'recovered',
    'konsultasi': 'ongoing consultation',
    'konsultasi lanjutan': 'ongoing consultation',
    'menunggu': 'pending',
    '-': 'pending'
  };

  const lowercaseText = text.toLowerCase();

  // Temukan status yang cocok secara parsial
  const matchedStatus = Object.keys(statusMappings).find(status =>
    status.toLowerCase().includes(lowercaseText)
  );

  return statusMappings[matchedStatus] || text;
}

export const checkLastMessage = (data) => {
  if (data?.image !== '') {
    return 'Gambar'
  }
  if (data?.audio !== '') {
    return 'Pesan suara'
  }
  
  if (isJSONString(data?.message)) {
    return 'Resep Obat'
  } else {
    return data?.message
  }
}

export const isJSONString = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}