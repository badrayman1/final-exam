import React from 'react';
const AppSection = () => {
  return (<>
    <section className="app-section  py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text */}
          <div className="col-md-6">
            <h2 className="display-4">Drive Smarter® App</h2>
            <p className="lead">
              Drive Smarter® is the best driving app you need to locate the nearest or your preferred Cobra Dash Cam-enabled devices. Available on both iOS and Android platforms, the Drive Smarter App lets you interact with your dash cam right on your display. With Apple CarPlay® and Android Auto® interfaces, you can get instant crash alerts, add video, sync your cloud and emergency button, and easily manage your device settings.
            </p>
          </div>

          {/* Right Column: Images */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="d-flex flex-row justify-content-between">
              <img src="https://www.cobra.com/cdn/shop/files/Cobra_DriveSmarter_WorksWith-CarPlay_Update_DriveSmarter-AppPage_Tile-1_v2_900x.jpg?v=1704397423" alt="Drive Smarter app splash screen" className="img-fluid mx-2 phone-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="app-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Images */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="d-flex flex-row justify-content-between">
            <img src="https://www.cobra.com/cdn/shop/files/Cobra_DriveSmarter_WorksWith-CarPlay_Update_DriveSmarter-AppPage_Tile-1_v2_900x.jpg?v=1704397423" alt="Drive Smarter app splash screen" className="img-fluid mx-2 phone-image" />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="col-md-6">
            <h2 className="display-4">Drive Smarter® App</h2>
            <p className="lead">
              Drive Smarter® is the best driving app you need to locate the nearest or your preferred Cobra Dash Cam-enabled devices. Available on both iOS and Android platforms, the Drive Smarter App lets you interact with your dash cam right on your display. With Apple CarPlay® and Android Auto® interfaces, you can get instant crash alerts, add video, sync your cloud and emergency button, and easily manage your device settings.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AppSection;
