    componentDidMount() 
        const url = "https://blockchain.info/ticker";
        axios.get(url).then(
            (x) => {
                this.setState({
                    infoidr: x.data.idr.buy
                })
            }
        )
    onHandleChange = (e) => {
        var val = e.target.value;
        this.setState({       
            btctemp: val * this.state.idr,
            btc: val,
        })
    }
    display() 
        if (this.state.btc) {
            return (
                <h2>BTC {this.state.btc} = Rp {Math.floor} </h2>
            )
        }
        else {
            return (
                <h2>Silakan input nominal bitcoin</h2>
            )
        }
    render() 
        return (
                <div className="container text-center">
                    <h2>Konversi Bitcoin ke Rupiah</h2>
                    <input type="number" className="form-control" placeholder="Ketik nominal bitcoin.." onChange={this.onHandleChange} />
                    {this.display()}
                </div>
             )
    
