import { DonationContainerProps } from './Models/donationContainerProps';
export const DonationContainer: React.FC<DonationContainerProps> = ({hasLoggedIn, items }) => {

    return (
        <div className="container donationContainerParent mw-100">
             <div className="row">
             <div className="col-md-4 my-3 ">
                <div className="card " style={{backgroundColor: '#b6c37f'}}>
                    <div className="card-body">
                        <h5 className="card-title">Sponser di event!</h5>
                        <input type={'text'} placeholder={'Amount'} className="form-control my-3"/>
                        <button className="btn" style={{backgroundColor: '#b25c68'}}>Donate</button>
                    </div>

                </div>
                </div>
                <div className="col-md-8">
                    {
                        hasLoggedIn && items.map((item, index) => {
                              return index % 3 === 0 ? (
                                <div className='row' key={index}>
                                    <div className='col-sm'>
                                        <button className='tobuy w-100 my-3 rounded'>{items[index].itemName}</button>
                                    </div>
                                    {items[index + 1] && <div className='col-sm'>
                                        <button className='tobuy w-100 my-3 rounded'>{items[index + 1].itemName}</button>
                                    </div>}
                                    {items[index + 2] && <div className='col-sm'>
                                        <button className='tobuy w-100 my-3 rounded'>{items[index + 2].itemName}</button>
                                    </div>}
                                </div>
                            ):null}
                            
                    )
                    }
                </div>
              
            </div>
        </div>
    );
}