import Download from "./Download";

const DownloadProject = (props: any) => {
  const handleDownload = () => {
    // Logica per scaricare il file PDF
    const fileUrl = props.fileDir;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = props.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div onClick={handleDownload} className="pointer">
      <Download />
    </div>
  );
};

export default DownloadProject;
