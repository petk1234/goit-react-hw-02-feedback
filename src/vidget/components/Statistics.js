import React from "react";

export default function Statistics({good, neutral, bad, total, positive}){
    return(
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive percentage: {positive}%</li>
        </ul>)
}