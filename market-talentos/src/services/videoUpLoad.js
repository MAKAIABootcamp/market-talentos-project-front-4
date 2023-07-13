const videoUpLoad = async (video) => {
    const cloudName = "dpvz3bvfv";
    const presetName = "bootcamp-makaia";
    const urlCloudinary = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`;
  
    const formData = new FormData();
    formData.append("file", video);
    formData.append("upload_preset", presetName);
    formData.append("cloud_name", cloudName);
  
    try {
      const response = await fetch(urlCloudinary, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        return null;
      }
  
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  
  export default videoUpLoad;
  