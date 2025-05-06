import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const Mail = () => {
  return (
    <a
    aria-label="mail"
    rel="noreferrer"
    target="_blank"
    href="mailto:raggimatteoo@gmail.com"
    className="black"
  >
  <MailOutlineOutlinedIcon sx={{ fontSize: 50 }} />
  </a>
  )
}

export default Mail