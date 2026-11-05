import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/Feature/searchSlice';

const Tabs = () => {
    const tabList = ['photos', 'gif', 'stickers'];
    const dispatch = useDispatch();
    const activeTab = useSelector((state) => state.search.activeTab);

    return (
        <div className='flex gap-3 p-5  justify-center px-10'>
            {tabList.map((element, idx) => (
                <button 
                    key={idx}  
                    className={`${activeTab == element ? 'bg-blue-700' : 'bg-gray-500'} transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
                    onClick={() => dispatch(setActiveTab(element))}
                >
                    {element}
                </button>
            ))}
        </div>
    );
}

export default Tabs;