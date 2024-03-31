import { Link } from 'react-router-dom'; 

const HomePage = () => {
    return (
        <div className="bg-gray-100">
            <section className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Efficient Task Management</h2>
                        <p className="text-lg text-gray-700 mb-8">Stay organized and boost productivity with our task management system.</p>
                        <Link to="/signup" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">Get Started</Link>
                    </div>
                </div>
            </section>
            <section className="bg-gray-200 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-4">Task Creation</h3>
                            <p>Create tasks easily and assign them to team members.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-4">Task Tracking</h3>
                            <p>Track the progress of tasks in real-time and never miss a deadline.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                            <p>Collaborate with your team members by sharing tasks and updates.</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-800 text-white py-6 text-center">
                <p>&copy; 2024 Taskify. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
