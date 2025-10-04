var config = {
  core_asset: "HBW",
  address_prefix: "HBW",
  // 交易过期时间
  expire_in_secs: 15,
  // 提案过期时间
  expire_in_secs_proposal: 24 * 60 * 60,
  // 理事会提案审核周期
  review_in_secs_committee: 24 * 60 * 60,
  networks: {
    BitShares: {
      core_asset: "HBW",
      address_prefix: "HBW",
      chain_id:
        "d8ee83d8ca641c9bb06d0e1fe09f170fdced44ab55798b41c90f2d47116986d4"
    },
    Test: {
      core_asset: "HBW",
      address_prefix: "HBW",
      chain_id:
        "d43509b1ea4a0ff8e44e0be000eabd98e43c24d80a2480ced1c155e4fa1adfe2"
    },
  },

  /** Set a few properties for known chain IDs. */
  setChainId: chain_id => {
    let result = Object.entries(config.networks).find(
      ([network_name, network]) => {
        if (network.chain_id === chain_id) {
          config.network_name = network_name;

          if (network.address_prefix) {
            config.address_prefix = network.address_prefix;
          }
          return true;
        }
      }
    );

    if (result) return { network_name: result[0], network: result[1] };
    else console.log("Unknown chain id (this may be a testnet)", chain_id);
  },

  reset: () => {
    config.core_asset = "HBW";
    config.address_prefix = "HBW";
    config.expire_in_secs = 15;
    config.expire_in_secs_proposal = 24 * 60 * 60;

    console.log("Chain config reset");
  },

  setPrefix: (prefix = "HBW") => (config.address_prefix = prefix)
};

export default config;
