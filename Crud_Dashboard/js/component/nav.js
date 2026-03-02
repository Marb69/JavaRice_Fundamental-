const nav = ()=>{

    return `
    
       <nav class='navbar'>


        <ul class='nav'>
            <li><a href='#'><span class='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard">
                            <rect width="7" height="9" x="3" y="3" rx="1" />
                            <rect width="7" height="5" x="14" y="3" rx="1" />
                            <rect width="7" height="9" x="14" y="12" rx="1" />
                            <rect width="7" height="5" x="3" y="16" rx="1" />
                        </svg></span><span class='text'>Dashboard</span></a></li>
            <li><a href='#'><span class='icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-square-chart-gantt-icon lucide-square-chart-gantt">
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M9 8h7" />
                            <path d="M8 12h6" />
                            <path d="M11 16h5" />
                        </svg></span><span class='text'>Products</span></a></li>
            <li><a href='#'><span class='icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus">
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                        </svg></span><span class='text'>Add Product</span></a></li>
            <li><a href='#'><span class='icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-file-user-icon lucide-file-user">
                            <path
                                d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                            <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                            <path d="M16 22a4 4 0 0 0-8 0" />
                            <circle cx="12" cy="15" r="3" />
                        </svg></span><span class='text'>User List</span></a></li>
        </ul>


    </nav>
 
    `
 
}

export default nav;