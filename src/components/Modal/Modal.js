import "./Modal.scss";

const Modal = ({className, description, heading, Icon}) => {
  return (
    <div className={className}>
      <p className="modal-description">{description}</p>
      <div className="modal-heading">
        <h4>{heading}</h4>
        <Icon className='arrow'/>
      </div>
    </div>
  );
};

export default Modal;
