const WhatsAppChat = () => {
  const openWhatsApp = () => {
    const phone = "+919810186798"; // Your phone number with country code
    const message = "Hello! I’d like to know more about your services.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        border: "none",
        fontSize: "28px",
        cursor: "pointer",
        zIndex:100
      }}
    >
      <i className="fab fa-whatsapp"></i>
    </button>
  );
};

export default WhatsAppChat;
