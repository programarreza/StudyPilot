import React from 'react';

const EnrolledClassDetails = ({ params }) => {

    return (
        <div>
            <h2>Enrolled class details . class id:{params.id}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td><button className='p-2 bg-green-700 text-white rounded-md'>Submit</button></td>
                        </tr>
                        {/* row 2 */}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClassDetails;