import React from "react";
import { Link } from 'react-router-dom'


export default function MainPage() {
  return (
    <div>
        
        <Link to='/products'>
            <button>Products Page</button>
        </Link>

        <Link to='/users'>
            <button>Users Page</button>
        </Link>
    </div>
  );
}
