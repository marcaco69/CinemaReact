export default function Button({ label, onClick, variant = "primary", icon }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {icon && <i className={`bi bi-${icon} me-2`} />} {label}
    </button>
  );
}
