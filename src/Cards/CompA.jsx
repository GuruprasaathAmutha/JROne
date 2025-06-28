

const CompA = () => {
    return (
        //component for counting the number of tasks in pending
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-2xl font-bold mb-4'>Pending Tasks</h1>
            <p className='text-lg'>You have 5 tasks pending.</p>
            <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>View Tasks</button>

        </div>
    )
}

export default CompA