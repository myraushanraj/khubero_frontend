import React, { useState, useEffect } from 'react'

const Loader = () => {
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <main className={loading ? "" : "hide"}>
        <div class="dank-ass-loader">
            <div class="loader-row">
                <div class="arrow up outer outer-18"></div>
                <div class="arrow down outer outer-17"></div>
                <div class="arrow up outer outer-16"></div>
                <div class="arrow down outer outer-15"></div>
                <div class="arrow up outer outer-14"></div>
            </div>
            <div class="loader-row">
                <div class="arrow up outer outer-1"></div>
                <div class="arrow down outer outer-2"></div>
                <div class="arrow up inner inner-6"></div>
                <div class="arrow down inner inner-5"></div>
                <div class="arrow up inner inner-4"></div>
                <div class="arrow down outer outer-13"></div>
                <div class="arrow up outer outer-12"></div>
            </div>
            <div class="loader-row">
                <div class="arrow down outer outer-3"></div>
                <div class="arrow up outer outer-4"></div>
                <div class="arrow down inner inner-1"></div>
                <div class="arrow up inner inner-2"></div>
                <div class="arrow down inner inner-3"></div>
                <div class="arrow up outer outer-11"></div>
                <div class="arrow down outer outer-10"></div>
            </div>
            <div class="loader-row">
                <div class="arrow down outer outer-5"></div>
                <div class="arrow up outer outer-6"></div>
                <div class="arrow down outer outer-7"></div>
                <div class="arrow up outer outer-8"></div>
                <div class="arrow down outer outer-9"></div>
            </div>
        </div>
    </main>
  )
}

export default Loader