import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
     
     <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
     
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere dapibus mauris id euismod. Nullam et porta mauris. Maecenas bibendum lobortis ipsum, eu tempor tortor fringilla at. Sed at sapien augue. Praesent a hendrerit nunc. Donec tellus lacus, pellentesque feugiat erat sit amet, rutrum pulvinar mi. Duis sed viverra nisi. Donec hendrerit justo id ipsum facilisis, at commodo nisl hendrerit. Pellentesque venenatis mi ac orci pretium ullamcorper. Nullam et turpis nec dolor sodales varius. Nam vehicula eleifend tellus ac dignissim.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere dapibus mauris id euismod. Nullam et porta mauris. Maecenas bibendum lobortis ipsum, eu tempor tortor fringilla at. Sed at sapien augue. Praesent a hendrerit nunc. Donec tellus lacus, pellentesque feugiat erat sit amet, rutrum pulvinar mi. Duis sed viverra nisi. Donec hendrerit justo id ipsum facilisis, at commodo nisl hendrerit. Pellentesque venenatis mi ac orci pretium ullamcorper. Nullam et turpis nec dolor sodales varius. Nam vehicula eleifend tellus ac dignissim.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere dapibus mauris id euismod. Nullam et porta mauris. Maecenas bibendum lobortis ipsum, eu tempor tortor fringilla at. Sed at sapien augue. Praesent a hendrerit nunc. Donec tellus lacus, pellentesque feugiat erat sit amet, rutrum pulvinar mi. Duis sed viverra nisi. Donec hendrerit justo id ipsum facilisis, at commodo nisl hendrerit. Pellentesque venenatis mi ac orci pretium ullamcorper. Nullam et turpis nec dolor sodales varius. Nam vehicula eleifend tellus ac dignissim.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere dapibus mauris id euismod. Nullam et porta mauris. Maecenas bibendum lobortis ipsum, eu tempor tortor fringilla at. Sed at sapien augue. Praesent a hendrerit nunc. Donec tellus lacus, pellentesque feugiat erat sit amet, rutrum pulvinar mi. Duis sed viverra nisi. Donec hendrerit justo id ipsum facilisis, at commodo nisl hendrerit. Pellentesque venenatis mi ac orci pretium ullamcorper. Nullam et turpis nec dolor sodales varius. Nam vehicula eleifend tellus ac dignissim.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere dapibus mauris id euismod. Nullam et porta mauris. Maecenas bibendum lobortis ipsum, eu tempor tortor fringilla at. Sed at sapien augue. Praesent a hendrerit nunc. Donec tellus lacus, pellentesque feugiat erat sit amet, rutrum pulvinar mi. Duis sed viverra nisi. Donec hendrerit justo id ipsum facilisis, at commodo nisl hendrerit. Pellentesque venenatis mi ac orci pretium ullamcorper. Nullam et turpis nec dolor sodales varius. Nam vehicula eleifend tellus ac dignissim.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere dapibus mauris id euismod. Nullam et porta mauris. Maecenas bibendum lobortis ipsum, eu tempor tortor fringilla at. Sed at sapien augue. Praesent a hendrerit nunc. Donec tellus lacus, pellentesque feugiat erat sit amet, rutrum pulvinar mi. Duis sed viverra nisi. Donec hendrerit justo id ipsum facilisis, at commodo nisl hendrerit. Pellentesque venenatis mi ac orci pretium ullamcorper. Nullam et turpis nec dolor sodales varius. Nam vehicula eleifend tellus ac dignissim.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere dapibus mauris id euismod. Nullam et porta mauris. Maecenas bibendum lobortis ipsum, eu tempor tortor fringilla at. Sed at sapien augue. Praesent a hendrerit nunc. Donec tellus lacus, pellentesque feugiat erat sit amet, rutrum pulvinar mi. Duis sed viverra nisi. Donec hendrerit justo id ipsum facilisis, at commodo nisl hendrerit. Pellentesque venenatis mi ac orci pretium ullamcorper. Nullam et turpis nec dolor sodales varius. Nam vehicula eleifend tellus ac dignissim.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere dapibus mauris id euismod. Nullam et porta mauris. Maecenas bibendum lobortis ipsum, eu tempor tortor fringilla at. Sed at sapien augue. Praesent a hendrerit nunc. Donec tellus lacus, pellentesque feugiat erat sit amet, rutrum pulvinar mi. Duis sed viverra nisi. Donec hendrerit justo id ipsum facilisis, at commodo nisl hendrerit. Pellentesque venenatis mi ac orci pretium ullamcorper. Nullam et turpis nec dolor sodales varius. Nam vehicula eleifend tellus ac dignissim.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere dapibus mauris id euismod. Nullam et porta mauris. Maecenas bibendum lobortis ipsum, eu tempor tortor fringilla at. Sed at sapien augue. Praesent a hendrerit nunc. Donec tellus lacus, pellentesque feugiat erat sit amet, rutrum pulvinar mi. Duis sed viverra nisi. Donec hendrerit justo id ipsum facilisis, at commodo nisl hendrerit. Pellentesque venenatis mi ac orci pretium ullamcorper. Nullam et turpis nec dolor sodales varius. Nam vehicula eleifend tellus ac dignissim.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere dapibus mauris id euismod. Nullam et porta mauris. Maecenas bibendum lobortis ipsum, eu tempor tortor fringilla at. Sed at sapien augue. Praesent a hendrerit nunc. Donec tellus lacus, pellentesque feugiat erat sit amet, rutrum pulvinar mi. Duis sed viverra nisi. Donec hendrerit justo id ipsum facilisis, at commodo nisl hendrerit. Pellentesque venenatis mi ac orci pretium ullamcorper. Nullam et turpis nec dolor sodales varius. Nam vehicula eleifend tellus ac dignissim.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere dapibus mauris id euismod. Nullam et porta mauris. Maecenas bibendum lobortis ipsum, eu tempor tortor fringilla at. Sed at sapien augue. Praesent a hendrerit nunc. Donec tellus lacus, pellentesque feugiat erat sit amet, rutrum pulvinar mi. Duis sed viverra nisi. Donec hendrerit justo id ipsum facilisis, at commodo nisl hendrerit. Pellentesque venenatis mi ac orci pretium ullamcorper. Nullam et turpis nec dolor sodales varius. Nam vehicula eleifend tellus ac dignissim.</p>

   
    </div>
  );
}

export default ModalPage;
