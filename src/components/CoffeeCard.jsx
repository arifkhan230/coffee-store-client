/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ coffee, coffees,setCoffees }) => {
    console.log(coffee)
    // eslint-disable-next-line react/prop-types
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            // eslint-disable-next-line react/prop-types
                            const remaining = coffees.filter(cof=>cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className="card card-side bg-[#F5F4F1] shadow ">
            <figure><img className="rounded-none" src={photo} alt="Movie" /></figure>
            <div className="flex w-full justify-between p-4">
                <div className="space-y-2">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Category: {quantity}</p>
                    <p>Category: {category}</p>
                    <p>Category: {supplier}</p>
                    <p>Category: {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-neutral">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn btn-neutral">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-400"> X </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;