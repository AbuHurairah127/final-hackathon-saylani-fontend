import React from "react";
import Button from "../button/Button";
import Modal from "react-modal";
import useModal from "./useModal";
import ButtonLoader from "./../buttonLoader/ButtonLoader";
Modal.setAppElement("#root");
const UpdateModal = (props) => {
  const { onChangeHandler, onSubmitHandler, buttonLoader } = useModal();

  const {
    isModalOpen,
    setIsModalOpen,
    updatedPropertyData,
    setUpdatedPropertyData,
  } = props;
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(29, 53, 87, 0.85)",
        },
        content: {
          position: "absolute",
          top: "10vh",
          bottom: "10vh",
          left: "15vh",
          right: "15vh",
          background: "white",
          overflow: "hidden",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: 0,
          width: "fit-content",
        },
      }}
    >
      <div className="pb-5 w-[80vw] h-[80vh] flex flex-col overflow-auto backdrop:bg-[#1d3557]">
        <div className="contactFormHeader w-full pt-8">
          <h1 className="text-center text-4xl font-bold">
            Want to update your property details <br /> Go Ahead...
          </h1>
        </div>
        <form
          onSubmit={(e) =>
            onSubmitHandler(
              e,
              updatedPropertyData,
              setUpdatedPropertyData,
              setIsModalOpen
            )
          }
        >
          <div className="w-full flex flex-col items-center">
            <div className="w-[60vw] flex flex-row flex-wrap justify-between md:h-12 mt-5">
              <div className="flex flex-col">
                <label htmlFor="propertyType">Property Type:</label>
                <select
                  name="propertyType"
                  id="propertyType"
                  className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
                  required
                  onChange={(e) => {
                    onChangeHandler(
                      e,
                      updatedPropertyData,
                      setUpdatedPropertyData
                    );
                  }}
                  value={updatedPropertyData.propertyType}
                >
                  <option value="">Select Property Type</option>
                  <option value="Shop">Shop</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Vacant Land">Vacant Land</option>
                  <option value="House">House</option>
                  <option value="Villa">Villa</option>
                  <option value="Industrial Property">
                    Industrial Property
                  </option>
                  <option value="Agricultural Property">
                    Agricultural Property
                  </option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="areaCovered">Area Covered</label>
                <input
                  type="number"
                  name="areaCovered"
                  id="areaCovered"
                  placeholder="Covered Area in sq ft."
                  required
                  className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
                  onChange={(e) => {
                    onChangeHandler(
                      e,
                      updatedPropertyData,
                      setUpdatedPropertyData
                    );
                  }}
                  value={updatedPropertyData.areaCovered}
                />
              </div>
            </div>
            <div className="w-[60vw] flex flex-row flex-wrap justify-between md:h-12 mt-5">
              <div className="flex flex-col">
                <label htmlFor="finishedType">Finished Type</label>
                <input
                  type="text"
                  name="finishedType"
                  id="finishedType"
                  placeholder="Finished type e.g. furnished"
                  required
                  className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
                  value={updatedPropertyData.finishedType}
                  onChange={(e) => {
                    onChangeHandler(
                      e,
                      updatedPropertyData,
                      setUpdatedPropertyData
                    );
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="requirement">Requirement</label>
                <select
                  name="requirement"
                  id="requirement"
                  className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
                  required
                  value={updatedPropertyData.requirement}
                  onChange={(e) => {
                    onChangeHandler(
                      e,
                      updatedPropertyData,
                      setUpdatedPropertyData
                    );
                  }}
                >
                  <option value="">Wants to Sell or Rent Out</option>
                  <option value="Sale">Sale</option>
                  <option value="Rent Out">Rent Out</option>
                </select>
              </div>
            </div>
            <div className="w-[60vw] flex flex-row flex-wrap justify-between md:h-12 mt-5">
              <div className="flex flex-col">
                <label htmlFor="noOfBedRooms">No. of Bed Rooms</label>
                <input
                  type="number"
                  name="noOfBedRooms"
                  id="noOfBedRooms"
                  placeholder="No. of Bedrooms (Optional)"
                  className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
                  value={updatedPropertyData.noOfBedRooms}
                  onChange={(e) => {
                    onChangeHandler(
                      e,
                      updatedPropertyData,
                      setUpdatedPropertyData
                    );
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="noOfLivingRooms">No. of Living Rooms</label>
                <input
                  type="number"
                  name="noOfLivingRooms"
                  id="noOfLivingRooms"
                  placeholder="No of Living Rooms (Optional)"
                  className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
                  value={updatedPropertyData.noOfLivingRooms}
                  onChange={(e) => {
                    onChangeHandler(
                      e,
                      updatedPropertyData,
                      setUpdatedPropertyData
                    );
                  }}
                />
              </div>
            </div>
            <div className="w-[60vw] flex flex-row flex-wrap justify-between md:h-12 mt-5">
              <div className="flex flex-col">
                <label htmlFor="noOfBathRooms">No. of Bathrooms</label>
                <input
                  type="number"
                  name="noOfBathRooms"
                  id="noOfBathRooms"
                  placeholder="No of Bathrooms"
                  required
                  className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
                  value={updatedPropertyData.noOfBathrooms}
                  onChange={(e) => {
                    onChangeHandler(
                      e,
                      updatedPropertyData,
                      setUpdatedPropertyData
                    );
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="noOfDiningRooms">No. of Dining Rooms</label>
                <input
                  type="number"
                  name="noOfDiningRooms"
                  id="noOfDiningRooms"
                  placeholder="No. of Dining Areas (Optional)"
                  className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
                  value={updatedPropertyData.noOfDiningRooms}
                  onChange={(e) => {
                    onChangeHandler(
                      e,
                      updatedPropertyData,
                      setUpdatedPropertyData
                    );
                  }}
                />
              </div>
            </div>
            <div className="w-[60vw] flex flex-row flex-wrap justify-between md:h-12 mt-5">
              <div className="flex flex-col">
                <label htmlFor="noOfReceptionAreas">
                  No. of Reception Areas
                </label>
                <input
                  type="number"
                  name="noOfReceptionAreas"
                  id="noOfReceptionAreas"
                  placeholder="No of Reception Areas"
                  required
                  className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
                  value={updatedPropertyData.noOfReceptionAreas}
                  onChange={(e) => {
                    onChangeHandler(
                      e,
                      updatedPropertyData,
                      setUpdatedPropertyData
                    );
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="noOfKitchens">No. of Kitchens</label>
                <input
                  type="number"
                  name="noOfKitchens"
                  id="noOfKitchens"
                  placeholder="No. of Kitchens"
                  required
                  className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
                  value={updatedPropertyData.noOfKitchens}
                  onChange={(e) => {
                    onChangeHandler(
                      e,
                      updatedPropertyData,
                      setUpdatedPropertyData
                    );
                  }}
                />
              </div>
            </div>
            <div className="w-[60vw] flex flex-col justify-between items-center mt-5">
              <div className="flex flex-col w-[60vw]">
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  id="address"
                  placeholder="Property Address"
                  className="w-full px-3 py-2 h-40 outline-0 border-2 rounded-sm"
                  required
                  value={updatedPropertyData.address}
                  onChange={(e) => {
                    onChangeHandler(
                      e,
                      updatedPropertyData,
                      setUpdatedPropertyData
                    );
                  }}
                ></textarea>
              </div>
            </div>
            <div className="w-[60vw] flex flex-row flex-wrap justify-between md:h-12 my-5">
              <div className="flex flex-col">
                <label htmlFor="city">City</label>
                <select
                  name="city"
                  id="city"
                  className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2 "
                  required
                  value={updatedPropertyData.city}
                  onChange={(e) => {
                    onChangeHandler(
                      e,
                      updatedPropertyData,
                      setUpdatedPropertyData
                    );
                  }}
                >
                  <option value="">Select The City</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
                  <option value="Ahmadpur East">Ahmadpur East</option>
                  <option value="Ali Khan Abad">Ali Khan Abad</option>
                  <option value="Alipur">Alipur</option>
                  <option value="Arifwala">Arifwala</option>
                  <option value="Attock">Attock</option>
                  <option value="Bhera">Bhera</option>
                  <option value="Bhalwal">Bhalwal</option>
                  <option value="Bahawalnagar">Bahawalnagar</option>
                  <option value="Bahawalpur">Bahawalpur</option>
                  <option value="Bhakkar">Bhakkar</option>
                  <option value="Burewala">Burewala</option>
                  <option value="Chillianwala">Chillianwala</option>
                  <option value="Chakwal">Chakwal</option>
                  <option value="Chichawatni">Chichawatni</option>
                  <option value="Chiniot">Chiniot</option>
                  <option value="Chishtian">Chishtian</option>
                  <option value="Daska">Daska</option>
                  <option value="Darya Khan">Darya Khan</option>
                  <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                  <option value="Dhaular">Dhaular</option>
                  <option value="Dina">Dina</option>
                  <option value="Dinga">Dinga</option>
                  <option value="Dipalpur">Dipalpur</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Ferozewala">Ferozewala</option>
                  <option value="Fateh Jhang">Fateh Jang</option>
                  <option value="Ghakhar Mandi">Ghakhar Mandi</option>
                  <option value="Gojra">Gojra</option>
                  <option value="Gujranwala">Gujranwala</option>
                  <option value="Gujrat">Gujrat</option>
                  <option value="Gujar Khan">Gujar Khan</option>
                  <option value="Hafizabad">Hafizabad</option>
                  <option value="Haroonabad">Haroonabad</option>
                  <option value="Hasilpur">Hasilpur</option>
                  <option value="Haveli Lakha">Haveli Lakha</option>
                  <option value="Jatoi">Jatoi</option>
                  <option value="Jalalpur">Jalalpur</option>
                  <option value="Jattan">Jattan</option>
                  <option value="Jampur">Jampur</option>
                  <option value="Jaranwala">Jaranwala</option>
                  <option value="Jhang">Jhang</option>
                  <option value="Jhelum">Jhelum</option>
                  <option value="Kalabagh">Kalabagh</option>
                  <option value="Karor Lal Esan">Karor Lal Esan</option>
                  <option value="Kasur">Kasur</option>
                  <option value="Kamalia">Kamalia</option>
                  <option value="Kamoke">Kamoke</option>
                  <option value="Khanewal">Khanewal</option>
                  <option value="Khanpur">Khanpur</option>
                  <option value="Kharian">Kharian</option>
                  <option value="Khushab">Khushab</option>
                  <option value="Kot Addu">Kot Addu</option>
                  <option value="Jauharabad">Jauharabad</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Lalamusa">Lalamusa</option>
                  <option value="Layyah">Layyah</option>
                  <option value="Liaquat Pur">Liaquat Pur</option>
                  <option value="Lodhran">Lodhran</option>
                  <option value="Malakwal">Malakwal</option>
                  <option value="Mamoori">Mamoori</option>
                  <option value="Mailsi">Mailsi</option>
                  <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                  <option value="Mian Channu">Mian Channu</option>
                  <option value="Mianwali">Mianwali</option>
                  <option value="Multan">Multan</option>
                  <option value="Murree">Murree</option>
                  <option value="Muridke">Muridke</option>
                  <option value="Mianwali Bangla">Mianwali Bangla</option>
                  <option value="Muzaffargarh">Muzaffargarh</option>
                  <option value="Narowal">Narowal</option>
                  <option value="Nankana Sahib">Nankana Sahib</option>
                  <option value="Okara">Okara</option>
                  <option value="Renala Khurd">Renala Khurd</option>
                  <option value="Pakpattan">Pakpattan</option>
                  <option value="Pattoki">Pattoki</option>
                  <option value="Pir Mahal">Pir Mahal</option>
                  <option value="Qaimpur">Qaimpur</option>
                  <option value="Qila Didar Singh">Qila Didar Singh</option>
                  <option value="Rabwah">Rabwah</option>
                  <option value="Raiwind">Raiwind</option>
                  <option value="Rajanpur">Rajanpur</option>
                  <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Sadiqabad">Sadiqabad</option>
                  <option value="Safdarabad">Safdarabad</option>
                  <option value="Sahiwal">Sahiwal</option>
                  <option value="Sangla Hill">Sangla Hill</option>
                  <option value="Sarai Alamgir">Sarai Alamgir</option>
                  <option value="Sargodha">Sargodha</option>
                  <option value="Shakargarh">Shakargarh</option>
                  <option value="Sheikhupura">Sheikhupura</option>
                  <option value="Sialkot">Sialkot</option>
                  <option value="Sohawa">Sohawa</option>
                  <option value="Soianwala">Soianwala</option>
                  <option value="Siranwali">Siranwali</option>
                  <option value="Talagang">Talagang</option>
                  <option value="Taxila">Taxila</option>
                  <option value="Toba Tek Singh">Toba Tek Singh</option>
                  <option value="Vehari">Vehari</option>
                  <option value="Wah Cantonment">Wah Cantonment</option>
                  <option value="Wazirabad">Wazirabad</option>
                  <option value="Badin">Badin</option>
                  <option value="Bhirkan">Bhirkan</option>
                  <option value="Rajo Khanani">Rajo Khanani</option>
                  <option value="Chak">Chak</option>
                  <option value="Dadu">Dadu</option>
                  <option value="Digri">Digri</option>
                  <option value="Diplo">Diplo</option>
                  <option value="Dokri">Dokri</option>
                  <option value="Ghotki">Ghotki</option>
                  <option value="Haala">Haala</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Islamkot">Islamkot</option>
                  <option value="Jacobabad">Jacobabad</option>
                  <option value="Jamshoro">Jamshoro</option>
                  <option value="Jungshahi">Jungshahi</option>
                  <option value="Kandhkot">Kandhkot</option>
                  <option value="Kandiaro">Kandiaro</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Kashmore">Kashmore</option>
                  <option value="Keti Bandar">Keti Bandar</option>
                  <option value="Khairpur">Khairpur</option>
                  <option value="Kotri">Kotri</option>
                  <option value="Larkana">Larkana</option>
                  <option value="Matiari">Matiari</option>
                  <option value="Mehar">Mehar</option>
                  <option value="Mirpur Khas">Mirpur Khas</option>
                  <option value="Mithani">Mithani</option>
                  <option value="Mithi">Mithi</option>
                  <option value="Mehrabpur">Mehrabpur</option>
                  <option value="Moro">Moro</option>
                  <option value="Nagarparkar">Nagarparkar</option>
                  <option value="Naudero">Naudero</option>
                  <option value="Naushahro Feroze">Naushahro Feroze</option>
                  <option value="Naushara">Naushara</option>
                  <option value="Nawabshah">Nawabshah</option>
                  <option value="Nazimabad">Nazimabad</option>
                  <option value="Qambar">Qambar</option>
                  <option value="Qasimabad">Qasimabad</option>
                  <option value="Ranipur">Ranipur</option>
                  <option value="Ratodero">Ratodero</option>
                  <option value="Rohri">Rohri</option>
                  <option value="Sakrand">Sakrand</option>
                  <option value="Sanghar">Sanghar</option>
                  <option value="Shahbandar">Shahbandar</option>
                  <option value="Shahdadkot">Shahdadkot</option>
                  <option value="Shahdadpur">Shahdadpur</option>
                  <option value="Shahpur Chakar">Shahpur Chakar</option>
                  <option value="Shikarpaur">Shikarpaur</option>
                  <option value="Sukkur">Sukkur</option>
                  <option value="Tangwani">Tangwani</option>
                  <option value="Tando Adam Khan">Tando Adam Khan</option>
                  <option value="Tando Allahyar">Tando Allahyar</option>
                  <option value="Tando Muhammad Khan">
                    Tando Muhammad Khan
                  </option>
                  <option value="Thatta">Thatta</option>
                  <option value="Umerkot">Umerkot</option>
                  <option value="Warah">Warah</option>
                  <option value="Abbottabad">Abbottabad</option>
                  <option value="Adezai">Adezai</option>
                  <option value="Alpuri">Alpuri</option>
                  <option value="Akora Khattak">Akora Khattak</option>
                  <option value="Ayubia">Ayubia</option>
                  <option value="Banda Daud Shah">Banda Daud Shah</option>
                  <option value="Bannu">Bannu</option>
                  <option value="Batkhela">Batkhela</option>
                  <option value="Battagram">Battagram</option>
                  <option value="Birote">Birote</option>
                  <option value="Chakdara">Chakdara</option>
                  <option value="Charsadda">Charsadda</option>
                  <option value="Chitral">Chitral</option>
                  <option value="Daggar">Daggar</option>
                  <option value="Dargai">Dargai</option>
                  <option value="Darya Khan">Darya Khan</option>
                  <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                  <option value="Doaba">Doaba</option>
                  <option value="Dir">Dir</option>
                  <option value="Drosh">Drosh</option>
                  <option value="Hangu">Hangu</option>
                  <option value="Haripur">Haripur</option>
                  <option value="Karak">Karak</option>
                  <option value="Kohat">Kohat</option>
                  <option value="Kulachi">Kulachi</option>
                  <option value="Lakki Marwat">Lakki Marwat</option>
                  <option value="Latamber">Latamber</option>
                  <option value="Madyan">Madyan</option>
                  <option value="Mansehra">Mansehra</option>
                  <option value="Mardan">Mardan</option>
                  <option value="Mastuj">Mastuj</option>
                  <option value="Mingora">Mingora</option>
                  <option value="Nowshera">Nowshera</option>
                  <option value="Paharpur">Paharpur</option>
                  <option value="Pabbi">Pabbi</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Saidu Sharif">Saidu Sharif</option>
                  <option value="Shorkot">Shorkot</option>
                  <option value="Shewa Adda">Shewa Adda</option>
                  <option value="Swabi">Swabi</option>
                  <option value="Swat">Swat</option>
                  <option value="Tangi">Tangi</option>
                  <option value="Tank">Tank</option>
                  <option value="Thall">Thall</option>
                  <option value="Timergara">Timergara</option>
                  <option value="Tordher">Tordher</option>
                  <option value="Awaran">Awaran</option>
                  <option value="Barkhan">Barkhan</option>
                  <option value="Chagai">Chagai</option>
                  <option value="Dera Bugti">Dera Bugti</option>
                  <option value="Gwadar">Gwadar</option>
                  <option value="Harnai">Harnai</option>
                  <option value="Jafarabad">Jafarabad</option>
                  <option value="Jhal Magsi">Jhal Magsi</option>
                  <option value="Kacchi">Kacchi</option>
                  <option value="Kalat">Kalat</option>
                  <option value="Kech">Kech</option>
                  <option value="Kharan">Kharan</option>
                  <option value="Khuzdar">Khuzdar</option>
                  <option value="Killa Abdullah">Killa Abdullah</option>
                  <option value="Killa Saifullah">Killa Saifullah</option>
                  <option value="Kohlu">Kohlu</option>
                  <option value="Lasbela">Lasbela</option>
                  <option value="Lehri">Lehri</option>
                  <option value="Loralai">Loralai</option>
                  <option value="Mastung">Mastung</option>
                  <option value="Musakhel">Musakhel</option>
                  <option value="Nasirabad">Nasirabad</option>
                  <option value="Nushki">Nushki</option>
                  <option value="Panjgur">Panjgur</option>
                  <option value="Pishin Valley">Pishin Valley</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Sherani">Sherani</option>
                  <option value="Sibi">Sibi</option>
                  <option value="Sohbatpur">Sohbatpur</option>
                  <option value="Washuk">Washuk</option>
                  <option value="Zhob">Zhob</option>
                  <option value="Ziarat">Ziarat</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="setaskingPrice">Set Asking Price</label>
                <input
                  type="number"
                  name="setAskingPrice"
                  id="setAskingPrice"
                  placeholder="Set Asking Price"
                  required
                  className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
                  value={updatedPropertyData.setAskingPrice}
                  onChange={(e) => {
                    onChangeHandler(
                      e,
                      updatedPropertyData,
                      setUpdatedPropertyData
                    );
                  }}
                />
              </div>
            </div>
            <div className="w-[60vw] flex flex-row justify-center mt-5">
              <Button
                label={
                  buttonLoader ? <ButtonLoader color="#DE5C0B" /> : "Update"
                }
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateModal;
