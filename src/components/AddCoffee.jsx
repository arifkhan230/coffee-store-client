import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee=event=>{
        event.preventDefault();
        const form = event.target;

        // getting field value
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee)

        // sending data to the server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newCoffee)


        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24" >
            <h2 className="text-3xl text-center font-extrabold mb-6">Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex gap-6 mb-8">
                    {/* coffee name */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* coffee quantity */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Enter Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className="md:flex gap-6 mb-8 ">
                    {/* Supplier name */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Enter Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* coffee Taste */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Enter Coffee taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex gap-6 mb-8">
                    {/* coffee Category */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Enter Coffee Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* coffee Details*/}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Enter Coffee Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*  form  coffee photo row */}
                <div className="mb-8">
                    {/* coffee Photo*/}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium ">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] hover:bg-[#D2B48C90]" />
                
            </form>
        </div>
    );
};

export default AddCoffee;