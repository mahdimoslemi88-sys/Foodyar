import React from 'react';
import { MenuItem } from '../../types';
import { getItemIcon } from '../../utils/icons';

interface MenuItemButtonProps {
    item: MenuItem;
    onAdd: (item: MenuItem) => void;
    isAnimated: boolean;
}

export const MenuItemButton: React.FC<MenuItemButtonProps> = React.memo(({ item, onAdd, isAnimated }) => {
    return (
        <button
            onClick={() => onAdd(item)}
            className={`bg-white rounded-3xl p-4 text-center group active:scale-95 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-indigo-100/50 border border-transparent hover:border-indigo-100 ${isAnimated ? 'animate-pop' : ''}`}
        >
            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-indigo-500 mb-4 group-hover:bg-indigo-50 transition-colors">
                {getItemIcon(item.category)}
            </div>
            <p className="font-bold text-slate-800 text-sm leading-tight h-10">{item.name}</p>
            <p className="text-xs text-slate-400 mt-2 font-medium">{(item.price).toLocaleString()} ت</p>
        </button>
    );
});

MenuItemButton.displayName = 'MenuItemButton';
