/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.m_proto = (function() {

    /**
     * Namespace m_proto.
     * @exports m_proto
     * @namespace
     */
    var m_proto = {};

    m_proto.BagItem = (function() {

        /**
         * Properties of a BagItem.
         * @memberof m_proto
         * @interface IBagItem
         * @property {number|Long|null} [bag_id] BagItem bag_id
         * @property {number|null} [item_id] BagItem item_id
         * @property {number|null} [item_count] BagItem item_count
         * @property {number|null} [bag_type] BagItem bag_type
         * @property {number|null} [page] BagItem page
         */

        /**
         * Constructs a new BagItem.
         * @memberof m_proto
         * @classdesc Represents a BagItem.
         * @implements IBagItem
         * @constructor
         * @param {m_proto.IBagItem=} [properties] Properties to set
         */
        function BagItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BagItem bag_id.
         * @member {number|Long} bag_id
         * @memberof m_proto.BagItem
         * @instance
         */
        BagItem.prototype.bag_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * BagItem item_id.
         * @member {number} item_id
         * @memberof m_proto.BagItem
         * @instance
         */
        BagItem.prototype.item_id = 0;

        /**
         * BagItem item_count.
         * @member {number} item_count
         * @memberof m_proto.BagItem
         * @instance
         */
        BagItem.prototype.item_count = 0;

        /**
         * BagItem bag_type.
         * @member {number} bag_type
         * @memberof m_proto.BagItem
         * @instance
         */
        BagItem.prototype.bag_type = 0;

        /**
         * BagItem page.
         * @member {number} page
         * @memberof m_proto.BagItem
         * @instance
         */
        BagItem.prototype.page = 0;

        /**
         * Creates a new BagItem instance using the specified properties.
         * @function create
         * @memberof m_proto.BagItem
         * @static
         * @param {m_proto.IBagItem=} [properties] Properties to set
         * @returns {m_proto.BagItem} BagItem instance
         */
        BagItem.create = function create(properties) {
            return new BagItem(properties);
        };

        /**
         * Encodes the specified BagItem message. Does not implicitly {@link m_proto.BagItem.verify|verify} messages.
         * @function encode
         * @memberof m_proto.BagItem
         * @static
         * @param {m_proto.IBagItem} message BagItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BagItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag_id != null && Object.hasOwnProperty.call(message, "bag_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.bag_id);
            if (message.item_id != null && Object.hasOwnProperty.call(message, "item_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.item_id);
            if (message.item_count != null && Object.hasOwnProperty.call(message, "item_count"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.item_count);
            if (message.bag_type != null && Object.hasOwnProperty.call(message, "bag_type"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.bag_type);
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.page);
            return writer;
        };

        /**
         * Encodes the specified BagItem message, length delimited. Does not implicitly {@link m_proto.BagItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.BagItem
         * @static
         * @param {m_proto.IBagItem} message BagItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BagItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BagItem message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.BagItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.BagItem} BagItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BagItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.BagItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bag_id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.item_id = reader.uint32();
                        break;
                    }
                case 3: {
                        message.item_count = reader.uint32();
                        break;
                    }
                case 4: {
                        message.bag_type = reader.uint32();
                        break;
                    }
                case 5: {
                        message.page = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BagItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.BagItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.BagItem} BagItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BagItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BagItem message.
         * @function verify
         * @memberof m_proto.BagItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BagItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag_id != null && message.hasOwnProperty("bag_id"))
                if (!$util.isInteger(message.bag_id) && !(message.bag_id && $util.isInteger(message.bag_id.low) && $util.isInteger(message.bag_id.high)))
                    return "bag_id: integer|Long expected";
            if (message.item_id != null && message.hasOwnProperty("item_id"))
                if (!$util.isInteger(message.item_id))
                    return "item_id: integer expected";
            if (message.item_count != null && message.hasOwnProperty("item_count"))
                if (!$util.isInteger(message.item_count))
                    return "item_count: integer expected";
            if (message.bag_type != null && message.hasOwnProperty("bag_type"))
                if (!$util.isInteger(message.bag_type))
                    return "bag_type: integer expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            return null;
        };

        /**
         * Creates a BagItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.BagItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.BagItem} BagItem
         */
        BagItem.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.BagItem)
                return object;
            var message = new $root.m_proto.BagItem();
            if (object.bag_id != null)
                if ($util.Long)
                    (message.bag_id = $util.Long.fromValue(object.bag_id)).unsigned = true;
                else if (typeof object.bag_id === "string")
                    message.bag_id = parseInt(object.bag_id, 10);
                else if (typeof object.bag_id === "number")
                    message.bag_id = object.bag_id;
                else if (typeof object.bag_id === "object")
                    message.bag_id = new $util.LongBits(object.bag_id.low >>> 0, object.bag_id.high >>> 0).toNumber(true);
            if (object.item_id != null)
                message.item_id = object.item_id >>> 0;
            if (object.item_count != null)
                message.item_count = object.item_count >>> 0;
            if (object.bag_type != null)
                message.bag_type = object.bag_type >>> 0;
            if (object.page != null)
                message.page = object.page >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a BagItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.BagItem
         * @static
         * @param {m_proto.BagItem} message BagItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BagItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bag_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bag_id = options.longs === String ? "0" : 0;
                object.item_id = 0;
                object.item_count = 0;
                object.bag_type = 0;
                object.page = 0;
            }
            if (message.bag_id != null && message.hasOwnProperty("bag_id"))
                if (typeof message.bag_id === "number")
                    object.bag_id = options.longs === String ? String(message.bag_id) : message.bag_id;
                else
                    object.bag_id = options.longs === String ? $util.Long.prototype.toString.call(message.bag_id) : options.longs === Number ? new $util.LongBits(message.bag_id.low >>> 0, message.bag_id.high >>> 0).toNumber(true) : message.bag_id;
            if (message.item_id != null && message.hasOwnProperty("item_id"))
                object.item_id = message.item_id;
            if (message.item_count != null && message.hasOwnProperty("item_count"))
                object.item_count = message.item_count;
            if (message.bag_type != null && message.hasOwnProperty("bag_type"))
                object.bag_type = message.bag_type;
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            return object;
        };

        /**
         * Converts this BagItem to JSON.
         * @function toJSON
         * @memberof m_proto.BagItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BagItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BagItem
         * @function getTypeUrl
         * @memberof m_proto.BagItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BagItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.BagItem";
        };

        return BagItem;
    })();

    m_proto.CS_GetBagList = (function() {

        /**
         * Properties of a CS_GetBagList.
         * @memberof m_proto
         * @interface ICS_GetBagList
         * @property {number|null} [bag_type] CS_GetBagList bag_type
         */

        /**
         * Constructs a new CS_GetBagList.
         * @memberof m_proto
         * @classdesc Represents a CS_GetBagList.
         * @implements ICS_GetBagList
         * @constructor
         * @param {m_proto.ICS_GetBagList=} [properties] Properties to set
         */
        function CS_GetBagList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_GetBagList bag_type.
         * @member {number} bag_type
         * @memberof m_proto.CS_GetBagList
         * @instance
         */
        CS_GetBagList.prototype.bag_type = 0;

        /**
         * Creates a new CS_GetBagList instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_GetBagList
         * @static
         * @param {m_proto.ICS_GetBagList=} [properties] Properties to set
         * @returns {m_proto.CS_GetBagList} CS_GetBagList instance
         */
        CS_GetBagList.create = function create(properties) {
            return new CS_GetBagList(properties);
        };

        /**
         * Encodes the specified CS_GetBagList message. Does not implicitly {@link m_proto.CS_GetBagList.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_GetBagList
         * @static
         * @param {m_proto.ICS_GetBagList} message CS_GetBagList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_GetBagList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag_type != null && Object.hasOwnProperty.call(message, "bag_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.bag_type);
            return writer;
        };

        /**
         * Encodes the specified CS_GetBagList message, length delimited. Does not implicitly {@link m_proto.CS_GetBagList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_GetBagList
         * @static
         * @param {m_proto.ICS_GetBagList} message CS_GetBagList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_GetBagList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_GetBagList message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_GetBagList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_GetBagList} CS_GetBagList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_GetBagList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_GetBagList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bag_type = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_GetBagList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_GetBagList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_GetBagList} CS_GetBagList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_GetBagList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_GetBagList message.
         * @function verify
         * @memberof m_proto.CS_GetBagList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_GetBagList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag_type != null && message.hasOwnProperty("bag_type"))
                if (!$util.isInteger(message.bag_type))
                    return "bag_type: integer expected";
            return null;
        };

        /**
         * Creates a CS_GetBagList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_GetBagList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_GetBagList} CS_GetBagList
         */
        CS_GetBagList.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_GetBagList)
                return object;
            var message = new $root.m_proto.CS_GetBagList();
            if (object.bag_type != null)
                message.bag_type = object.bag_type >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CS_GetBagList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_GetBagList
         * @static
         * @param {m_proto.CS_GetBagList} message CS_GetBagList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_GetBagList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.bag_type = 0;
            if (message.bag_type != null && message.hasOwnProperty("bag_type"))
                object.bag_type = message.bag_type;
            return object;
        };

        /**
         * Converts this CS_GetBagList to JSON.
         * @function toJSON
         * @memberof m_proto.CS_GetBagList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_GetBagList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_GetBagList
         * @function getTypeUrl
         * @memberof m_proto.CS_GetBagList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_GetBagList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_GetBagList";
        };

        return CS_GetBagList;
    })();

    m_proto.SC_GetBagList = (function() {

        /**
         * Properties of a SC_GetBagList.
         * @memberof m_proto
         * @interface ISC_GetBagList
         * @property {number|null} [err_code] SC_GetBagList err_code
         * @property {number|null} [bag_type] SC_GetBagList bag_type
         * @property {Array.<m_proto.IBagItem>|null} [items] SC_GetBagList items
         */

        /**
         * Constructs a new SC_GetBagList.
         * @memberof m_proto
         * @classdesc Represents a SC_GetBagList.
         * @implements ISC_GetBagList
         * @constructor
         * @param {m_proto.ISC_GetBagList=} [properties] Properties to set
         */
        function SC_GetBagList(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_GetBagList err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_GetBagList
         * @instance
         */
        SC_GetBagList.prototype.err_code = 0;

        /**
         * SC_GetBagList bag_type.
         * @member {number} bag_type
         * @memberof m_proto.SC_GetBagList
         * @instance
         */
        SC_GetBagList.prototype.bag_type = 0;

        /**
         * SC_GetBagList items.
         * @member {Array.<m_proto.IBagItem>} items
         * @memberof m_proto.SC_GetBagList
         * @instance
         */
        SC_GetBagList.prototype.items = $util.emptyArray;

        /**
         * Creates a new SC_GetBagList instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_GetBagList
         * @static
         * @param {m_proto.ISC_GetBagList=} [properties] Properties to set
         * @returns {m_proto.SC_GetBagList} SC_GetBagList instance
         */
        SC_GetBagList.create = function create(properties) {
            return new SC_GetBagList(properties);
        };

        /**
         * Encodes the specified SC_GetBagList message. Does not implicitly {@link m_proto.SC_GetBagList.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_GetBagList
         * @static
         * @param {m_proto.ISC_GetBagList} message SC_GetBagList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_GetBagList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            if (message.bag_type != null && Object.hasOwnProperty.call(message, "bag_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bag_type);
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.m_proto.BagItem.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SC_GetBagList message, length delimited. Does not implicitly {@link m_proto.SC_GetBagList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_GetBagList
         * @static
         * @param {m_proto.ISC_GetBagList} message SC_GetBagList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_GetBagList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_GetBagList message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_GetBagList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_GetBagList} SC_GetBagList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_GetBagList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_GetBagList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.bag_type = reader.uint32();
                        break;
                    }
                case 3: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.m_proto.BagItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_GetBagList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_GetBagList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_GetBagList} SC_GetBagList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_GetBagList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_GetBagList message.
         * @function verify
         * @memberof m_proto.SC_GetBagList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_GetBagList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            if (message.bag_type != null && message.hasOwnProperty("bag_type"))
                if (!$util.isInteger(message.bag_type))
                    return "bag_type: integer expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.m_proto.BagItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SC_GetBagList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_GetBagList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_GetBagList} SC_GetBagList
         */
        SC_GetBagList.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_GetBagList)
                return object;
            var message = new $root.m_proto.SC_GetBagList();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            if (object.bag_type != null)
                message.bag_type = object.bag_type >>> 0;
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".m_proto.SC_GetBagList.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".m_proto.SC_GetBagList.items: object expected");
                    message.items[i] = $root.m_proto.BagItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SC_GetBagList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_GetBagList
         * @static
         * @param {m_proto.SC_GetBagList} message SC_GetBagList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_GetBagList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (options.defaults) {
                object.err_code = 0;
                object.bag_type = 0;
            }
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            if (message.bag_type != null && message.hasOwnProperty("bag_type"))
                object.bag_type = message.bag_type;
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.m_proto.BagItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this SC_GetBagList to JSON.
         * @function toJSON
         * @memberof m_proto.SC_GetBagList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_GetBagList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_GetBagList
         * @function getTypeUrl
         * @memberof m_proto.SC_GetBagList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_GetBagList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_GetBagList";
        };

        return SC_GetBagList;
    })();

    m_proto.CS_BagWear = (function() {

        /**
         * Properties of a CS_BagWear.
         * @memberof m_proto
         * @interface ICS_BagWear
         * @property {number|Long|null} [bag_id] CS_BagWear bag_id
         * @property {number|null} [item_id] CS_BagWear item_id
         */

        /**
         * Constructs a new CS_BagWear.
         * @memberof m_proto
         * @classdesc Represents a CS_BagWear.
         * @implements ICS_BagWear
         * @constructor
         * @param {m_proto.ICS_BagWear=} [properties] Properties to set
         */
        function CS_BagWear(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_BagWear bag_id.
         * @member {number|Long} bag_id
         * @memberof m_proto.CS_BagWear
         * @instance
         */
        CS_BagWear.prototype.bag_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * CS_BagWear item_id.
         * @member {number} item_id
         * @memberof m_proto.CS_BagWear
         * @instance
         */
        CS_BagWear.prototype.item_id = 0;

        /**
         * Creates a new CS_BagWear instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_BagWear
         * @static
         * @param {m_proto.ICS_BagWear=} [properties] Properties to set
         * @returns {m_proto.CS_BagWear} CS_BagWear instance
         */
        CS_BagWear.create = function create(properties) {
            return new CS_BagWear(properties);
        };

        /**
         * Encodes the specified CS_BagWear message. Does not implicitly {@link m_proto.CS_BagWear.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_BagWear
         * @static
         * @param {m_proto.ICS_BagWear} message CS_BagWear message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_BagWear.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag_id != null && Object.hasOwnProperty.call(message, "bag_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.bag_id);
            if (message.item_id != null && Object.hasOwnProperty.call(message, "item_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.item_id);
            return writer;
        };

        /**
         * Encodes the specified CS_BagWear message, length delimited. Does not implicitly {@link m_proto.CS_BagWear.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_BagWear
         * @static
         * @param {m_proto.ICS_BagWear} message CS_BagWear message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_BagWear.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_BagWear message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_BagWear
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_BagWear} CS_BagWear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_BagWear.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_BagWear();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bag_id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.item_id = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_BagWear message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_BagWear
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_BagWear} CS_BagWear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_BagWear.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_BagWear message.
         * @function verify
         * @memberof m_proto.CS_BagWear
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_BagWear.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag_id != null && message.hasOwnProperty("bag_id"))
                if (!$util.isInteger(message.bag_id) && !(message.bag_id && $util.isInteger(message.bag_id.low) && $util.isInteger(message.bag_id.high)))
                    return "bag_id: integer|Long expected";
            if (message.item_id != null && message.hasOwnProperty("item_id"))
                if (!$util.isInteger(message.item_id))
                    return "item_id: integer expected";
            return null;
        };

        /**
         * Creates a CS_BagWear message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_BagWear
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_BagWear} CS_BagWear
         */
        CS_BagWear.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_BagWear)
                return object;
            var message = new $root.m_proto.CS_BagWear();
            if (object.bag_id != null)
                if ($util.Long)
                    (message.bag_id = $util.Long.fromValue(object.bag_id)).unsigned = true;
                else if (typeof object.bag_id === "string")
                    message.bag_id = parseInt(object.bag_id, 10);
                else if (typeof object.bag_id === "number")
                    message.bag_id = object.bag_id;
                else if (typeof object.bag_id === "object")
                    message.bag_id = new $util.LongBits(object.bag_id.low >>> 0, object.bag_id.high >>> 0).toNumber(true);
            if (object.item_id != null)
                message.item_id = object.item_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CS_BagWear message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_BagWear
         * @static
         * @param {m_proto.CS_BagWear} message CS_BagWear
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_BagWear.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bag_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bag_id = options.longs === String ? "0" : 0;
                object.item_id = 0;
            }
            if (message.bag_id != null && message.hasOwnProperty("bag_id"))
                if (typeof message.bag_id === "number")
                    object.bag_id = options.longs === String ? String(message.bag_id) : message.bag_id;
                else
                    object.bag_id = options.longs === String ? $util.Long.prototype.toString.call(message.bag_id) : options.longs === Number ? new $util.LongBits(message.bag_id.low >>> 0, message.bag_id.high >>> 0).toNumber(true) : message.bag_id;
            if (message.item_id != null && message.hasOwnProperty("item_id"))
                object.item_id = message.item_id;
            return object;
        };

        /**
         * Converts this CS_BagWear to JSON.
         * @function toJSON
         * @memberof m_proto.CS_BagWear
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_BagWear.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_BagWear
         * @function getTypeUrl
         * @memberof m_proto.CS_BagWear
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_BagWear.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_BagWear";
        };

        return CS_BagWear;
    })();

    m_proto.SC_BagWear = (function() {

        /**
         * Properties of a SC_BagWear.
         * @memberof m_proto
         * @interface ISC_BagWear
         * @property {number|null} [err_code] SC_BagWear err_code
         */

        /**
         * Constructs a new SC_BagWear.
         * @memberof m_proto
         * @classdesc Represents a SC_BagWear.
         * @implements ISC_BagWear
         * @constructor
         * @param {m_proto.ISC_BagWear=} [properties] Properties to set
         */
        function SC_BagWear(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_BagWear err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_BagWear
         * @instance
         */
        SC_BagWear.prototype.err_code = 0;

        /**
         * Creates a new SC_BagWear instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_BagWear
         * @static
         * @param {m_proto.ISC_BagWear=} [properties] Properties to set
         * @returns {m_proto.SC_BagWear} SC_BagWear instance
         */
        SC_BagWear.create = function create(properties) {
            return new SC_BagWear(properties);
        };

        /**
         * Encodes the specified SC_BagWear message. Does not implicitly {@link m_proto.SC_BagWear.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_BagWear
         * @static
         * @param {m_proto.ISC_BagWear} message SC_BagWear message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagWear.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            return writer;
        };

        /**
         * Encodes the specified SC_BagWear message, length delimited. Does not implicitly {@link m_proto.SC_BagWear.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_BagWear
         * @static
         * @param {m_proto.ISC_BagWear} message SC_BagWear message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagWear.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_BagWear message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_BagWear
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_BagWear} SC_BagWear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagWear.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_BagWear();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_BagWear message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_BagWear
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_BagWear} SC_BagWear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagWear.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_BagWear message.
         * @function verify
         * @memberof m_proto.SC_BagWear
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_BagWear.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            return null;
        };

        /**
         * Creates a SC_BagWear message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_BagWear
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_BagWear} SC_BagWear
         */
        SC_BagWear.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_BagWear)
                return object;
            var message = new $root.m_proto.SC_BagWear();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_BagWear message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_BagWear
         * @static
         * @param {m_proto.SC_BagWear} message SC_BagWear
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_BagWear.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err_code = 0;
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            return object;
        };

        /**
         * Converts this SC_BagWear to JSON.
         * @function toJSON
         * @memberof m_proto.SC_BagWear
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_BagWear.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_BagWear
         * @function getTypeUrl
         * @memberof m_proto.SC_BagWear
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_BagWear.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_BagWear";
        };

        return SC_BagWear;
    })();

    m_proto.CS_BagUseItem = (function() {

        /**
         * Properties of a CS_BagUseItem.
         * @memberof m_proto
         * @interface ICS_BagUseItem
         * @property {number|null} [item_id] CS_BagUseItem item_id
         * @property {number|null} [item_count] CS_BagUseItem item_count
         */

        /**
         * Constructs a new CS_BagUseItem.
         * @memberof m_proto
         * @classdesc Represents a CS_BagUseItem.
         * @implements ICS_BagUseItem
         * @constructor
         * @param {m_proto.ICS_BagUseItem=} [properties] Properties to set
         */
        function CS_BagUseItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_BagUseItem item_id.
         * @member {number} item_id
         * @memberof m_proto.CS_BagUseItem
         * @instance
         */
        CS_BagUseItem.prototype.item_id = 0;

        /**
         * CS_BagUseItem item_count.
         * @member {number} item_count
         * @memberof m_proto.CS_BagUseItem
         * @instance
         */
        CS_BagUseItem.prototype.item_count = 0;

        /**
         * Creates a new CS_BagUseItem instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_BagUseItem
         * @static
         * @param {m_proto.ICS_BagUseItem=} [properties] Properties to set
         * @returns {m_proto.CS_BagUseItem} CS_BagUseItem instance
         */
        CS_BagUseItem.create = function create(properties) {
            return new CS_BagUseItem(properties);
        };

        /**
         * Encodes the specified CS_BagUseItem message. Does not implicitly {@link m_proto.CS_BagUseItem.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_BagUseItem
         * @static
         * @param {m_proto.ICS_BagUseItem} message CS_BagUseItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_BagUseItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.item_id != null && Object.hasOwnProperty.call(message, "item_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.item_id);
            if (message.item_count != null && Object.hasOwnProperty.call(message, "item_count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.item_count);
            return writer;
        };

        /**
         * Encodes the specified CS_BagUseItem message, length delimited. Does not implicitly {@link m_proto.CS_BagUseItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_BagUseItem
         * @static
         * @param {m_proto.ICS_BagUseItem} message CS_BagUseItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_BagUseItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_BagUseItem message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_BagUseItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_BagUseItem} CS_BagUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_BagUseItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_BagUseItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.item_id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.item_count = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_BagUseItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_BagUseItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_BagUseItem} CS_BagUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_BagUseItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_BagUseItem message.
         * @function verify
         * @memberof m_proto.CS_BagUseItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_BagUseItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.item_id != null && message.hasOwnProperty("item_id"))
                if (!$util.isInteger(message.item_id))
                    return "item_id: integer expected";
            if (message.item_count != null && message.hasOwnProperty("item_count"))
                if (!$util.isInteger(message.item_count))
                    return "item_count: integer expected";
            return null;
        };

        /**
         * Creates a CS_BagUseItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_BagUseItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_BagUseItem} CS_BagUseItem
         */
        CS_BagUseItem.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_BagUseItem)
                return object;
            var message = new $root.m_proto.CS_BagUseItem();
            if (object.item_id != null)
                message.item_id = object.item_id >>> 0;
            if (object.item_count != null)
                message.item_count = object.item_count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CS_BagUseItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_BagUseItem
         * @static
         * @param {m_proto.CS_BagUseItem} message CS_BagUseItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_BagUseItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.item_id = 0;
                object.item_count = 0;
            }
            if (message.item_id != null && message.hasOwnProperty("item_id"))
                object.item_id = message.item_id;
            if (message.item_count != null && message.hasOwnProperty("item_count"))
                object.item_count = message.item_count;
            return object;
        };

        /**
         * Converts this CS_BagUseItem to JSON.
         * @function toJSON
         * @memberof m_proto.CS_BagUseItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_BagUseItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_BagUseItem
         * @function getTypeUrl
         * @memberof m_proto.CS_BagUseItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_BagUseItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_BagUseItem";
        };

        return CS_BagUseItem;
    })();

    m_proto.SC_BagUseItem = (function() {

        /**
         * Properties of a SC_BagUseItem.
         * @memberof m_proto
         * @interface ISC_BagUseItem
         * @property {number|null} [err_code] SC_BagUseItem err_code
         */

        /**
         * Constructs a new SC_BagUseItem.
         * @memberof m_proto
         * @classdesc Represents a SC_BagUseItem.
         * @implements ISC_BagUseItem
         * @constructor
         * @param {m_proto.ISC_BagUseItem=} [properties] Properties to set
         */
        function SC_BagUseItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_BagUseItem err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_BagUseItem
         * @instance
         */
        SC_BagUseItem.prototype.err_code = 0;

        /**
         * Creates a new SC_BagUseItem instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_BagUseItem
         * @static
         * @param {m_proto.ISC_BagUseItem=} [properties] Properties to set
         * @returns {m_proto.SC_BagUseItem} SC_BagUseItem instance
         */
        SC_BagUseItem.create = function create(properties) {
            return new SC_BagUseItem(properties);
        };

        /**
         * Encodes the specified SC_BagUseItem message. Does not implicitly {@link m_proto.SC_BagUseItem.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_BagUseItem
         * @static
         * @param {m_proto.ISC_BagUseItem} message SC_BagUseItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagUseItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            return writer;
        };

        /**
         * Encodes the specified SC_BagUseItem message, length delimited. Does not implicitly {@link m_proto.SC_BagUseItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_BagUseItem
         * @static
         * @param {m_proto.ISC_BagUseItem} message SC_BagUseItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagUseItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_BagUseItem message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_BagUseItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_BagUseItem} SC_BagUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagUseItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_BagUseItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_BagUseItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_BagUseItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_BagUseItem} SC_BagUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagUseItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_BagUseItem message.
         * @function verify
         * @memberof m_proto.SC_BagUseItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_BagUseItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            return null;
        };

        /**
         * Creates a SC_BagUseItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_BagUseItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_BagUseItem} SC_BagUseItem
         */
        SC_BagUseItem.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_BagUseItem)
                return object;
            var message = new $root.m_proto.SC_BagUseItem();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_BagUseItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_BagUseItem
         * @static
         * @param {m_proto.SC_BagUseItem} message SC_BagUseItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_BagUseItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err_code = 0;
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            return object;
        };

        /**
         * Converts this SC_BagUseItem to JSON.
         * @function toJSON
         * @memberof m_proto.SC_BagUseItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_BagUseItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_BagUseItem
         * @function getTypeUrl
         * @memberof m_proto.SC_BagUseItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_BagUseItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_BagUseItem";
        };

        return SC_BagUseItem;
    })();

    m_proto.CS_BagStoreDeposit = (function() {

        /**
         * Properties of a CS_BagStoreDeposit.
         * @memberof m_proto
         * @interface ICS_BagStoreDeposit
         * @property {number|Long|null} [bag_id] CS_BagStoreDeposit bag_id
         * @property {number|null} [page] CS_BagStoreDeposit page
         */

        /**
         * Constructs a new CS_BagStoreDeposit.
         * @memberof m_proto
         * @classdesc Represents a CS_BagStoreDeposit.
         * @implements ICS_BagStoreDeposit
         * @constructor
         * @param {m_proto.ICS_BagStoreDeposit=} [properties] Properties to set
         */
        function CS_BagStoreDeposit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_BagStoreDeposit bag_id.
         * @member {number|Long} bag_id
         * @memberof m_proto.CS_BagStoreDeposit
         * @instance
         */
        CS_BagStoreDeposit.prototype.bag_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * CS_BagStoreDeposit page.
         * @member {number} page
         * @memberof m_proto.CS_BagStoreDeposit
         * @instance
         */
        CS_BagStoreDeposit.prototype.page = 0;

        /**
         * Creates a new CS_BagStoreDeposit instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_BagStoreDeposit
         * @static
         * @param {m_proto.ICS_BagStoreDeposit=} [properties] Properties to set
         * @returns {m_proto.CS_BagStoreDeposit} CS_BagStoreDeposit instance
         */
        CS_BagStoreDeposit.create = function create(properties) {
            return new CS_BagStoreDeposit(properties);
        };

        /**
         * Encodes the specified CS_BagStoreDeposit message. Does not implicitly {@link m_proto.CS_BagStoreDeposit.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_BagStoreDeposit
         * @static
         * @param {m_proto.ICS_BagStoreDeposit} message CS_BagStoreDeposit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_BagStoreDeposit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag_id != null && Object.hasOwnProperty.call(message, "bag_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.bag_id);
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.page);
            return writer;
        };

        /**
         * Encodes the specified CS_BagStoreDeposit message, length delimited. Does not implicitly {@link m_proto.CS_BagStoreDeposit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_BagStoreDeposit
         * @static
         * @param {m_proto.ICS_BagStoreDeposit} message CS_BagStoreDeposit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_BagStoreDeposit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_BagStoreDeposit message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_BagStoreDeposit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_BagStoreDeposit} CS_BagStoreDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_BagStoreDeposit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_BagStoreDeposit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bag_id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.page = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_BagStoreDeposit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_BagStoreDeposit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_BagStoreDeposit} CS_BagStoreDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_BagStoreDeposit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_BagStoreDeposit message.
         * @function verify
         * @memberof m_proto.CS_BagStoreDeposit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_BagStoreDeposit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag_id != null && message.hasOwnProperty("bag_id"))
                if (!$util.isInteger(message.bag_id) && !(message.bag_id && $util.isInteger(message.bag_id.low) && $util.isInteger(message.bag_id.high)))
                    return "bag_id: integer|Long expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            return null;
        };

        /**
         * Creates a CS_BagStoreDeposit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_BagStoreDeposit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_BagStoreDeposit} CS_BagStoreDeposit
         */
        CS_BagStoreDeposit.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_BagStoreDeposit)
                return object;
            var message = new $root.m_proto.CS_BagStoreDeposit();
            if (object.bag_id != null)
                if ($util.Long)
                    (message.bag_id = $util.Long.fromValue(object.bag_id)).unsigned = true;
                else if (typeof object.bag_id === "string")
                    message.bag_id = parseInt(object.bag_id, 10);
                else if (typeof object.bag_id === "number")
                    message.bag_id = object.bag_id;
                else if (typeof object.bag_id === "object")
                    message.bag_id = new $util.LongBits(object.bag_id.low >>> 0, object.bag_id.high >>> 0).toNumber(true);
            if (object.page != null)
                message.page = object.page >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CS_BagStoreDeposit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_BagStoreDeposit
         * @static
         * @param {m_proto.CS_BagStoreDeposit} message CS_BagStoreDeposit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_BagStoreDeposit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bag_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bag_id = options.longs === String ? "0" : 0;
                object.page = 0;
            }
            if (message.bag_id != null && message.hasOwnProperty("bag_id"))
                if (typeof message.bag_id === "number")
                    object.bag_id = options.longs === String ? String(message.bag_id) : message.bag_id;
                else
                    object.bag_id = options.longs === String ? $util.Long.prototype.toString.call(message.bag_id) : options.longs === Number ? new $util.LongBits(message.bag_id.low >>> 0, message.bag_id.high >>> 0).toNumber(true) : message.bag_id;
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            return object;
        };

        /**
         * Converts this CS_BagStoreDeposit to JSON.
         * @function toJSON
         * @memberof m_proto.CS_BagStoreDeposit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_BagStoreDeposit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_BagStoreDeposit
         * @function getTypeUrl
         * @memberof m_proto.CS_BagStoreDeposit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_BagStoreDeposit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_BagStoreDeposit";
        };

        return CS_BagStoreDeposit;
    })();

    m_proto.SC_BagStoreDeposit = (function() {

        /**
         * Properties of a SC_BagStoreDeposit.
         * @memberof m_proto
         * @interface ISC_BagStoreDeposit
         * @property {number|null} [err_code] SC_BagStoreDeposit err_code
         */

        /**
         * Constructs a new SC_BagStoreDeposit.
         * @memberof m_proto
         * @classdesc Represents a SC_BagStoreDeposit.
         * @implements ISC_BagStoreDeposit
         * @constructor
         * @param {m_proto.ISC_BagStoreDeposit=} [properties] Properties to set
         */
        function SC_BagStoreDeposit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_BagStoreDeposit err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_BagStoreDeposit
         * @instance
         */
        SC_BagStoreDeposit.prototype.err_code = 0;

        /**
         * Creates a new SC_BagStoreDeposit instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_BagStoreDeposit
         * @static
         * @param {m_proto.ISC_BagStoreDeposit=} [properties] Properties to set
         * @returns {m_proto.SC_BagStoreDeposit} SC_BagStoreDeposit instance
         */
        SC_BagStoreDeposit.create = function create(properties) {
            return new SC_BagStoreDeposit(properties);
        };

        /**
         * Encodes the specified SC_BagStoreDeposit message. Does not implicitly {@link m_proto.SC_BagStoreDeposit.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_BagStoreDeposit
         * @static
         * @param {m_proto.ISC_BagStoreDeposit} message SC_BagStoreDeposit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagStoreDeposit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            return writer;
        };

        /**
         * Encodes the specified SC_BagStoreDeposit message, length delimited. Does not implicitly {@link m_proto.SC_BagStoreDeposit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_BagStoreDeposit
         * @static
         * @param {m_proto.ISC_BagStoreDeposit} message SC_BagStoreDeposit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagStoreDeposit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_BagStoreDeposit message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_BagStoreDeposit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_BagStoreDeposit} SC_BagStoreDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagStoreDeposit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_BagStoreDeposit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_BagStoreDeposit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_BagStoreDeposit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_BagStoreDeposit} SC_BagStoreDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagStoreDeposit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_BagStoreDeposit message.
         * @function verify
         * @memberof m_proto.SC_BagStoreDeposit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_BagStoreDeposit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            return null;
        };

        /**
         * Creates a SC_BagStoreDeposit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_BagStoreDeposit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_BagStoreDeposit} SC_BagStoreDeposit
         */
        SC_BagStoreDeposit.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_BagStoreDeposit)
                return object;
            var message = new $root.m_proto.SC_BagStoreDeposit();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_BagStoreDeposit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_BagStoreDeposit
         * @static
         * @param {m_proto.SC_BagStoreDeposit} message SC_BagStoreDeposit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_BagStoreDeposit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err_code = 0;
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            return object;
        };

        /**
         * Converts this SC_BagStoreDeposit to JSON.
         * @function toJSON
         * @memberof m_proto.SC_BagStoreDeposit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_BagStoreDeposit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_BagStoreDeposit
         * @function getTypeUrl
         * @memberof m_proto.SC_BagStoreDeposit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_BagStoreDeposit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_BagStoreDeposit";
        };

        return SC_BagStoreDeposit;
    })();

    m_proto.CS_SoulForge = (function() {

        /**
         * Properties of a CS_SoulForge.
         * @memberof m_proto
         * @interface ICS_SoulForge
         * @property {number|Long|null} [bag_id] CS_SoulForge bag_id
         */

        /**
         * Constructs a new CS_SoulForge.
         * @memberof m_proto
         * @classdesc Represents a CS_SoulForge.
         * @implements ICS_SoulForge
         * @constructor
         * @param {m_proto.ICS_SoulForge=} [properties] Properties to set
         */
        function CS_SoulForge(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_SoulForge bag_id.
         * @member {number|Long} bag_id
         * @memberof m_proto.CS_SoulForge
         * @instance
         */
        CS_SoulForge.prototype.bag_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new CS_SoulForge instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_SoulForge
         * @static
         * @param {m_proto.ICS_SoulForge=} [properties] Properties to set
         * @returns {m_proto.CS_SoulForge} CS_SoulForge instance
         */
        CS_SoulForge.create = function create(properties) {
            return new CS_SoulForge(properties);
        };

        /**
         * Encodes the specified CS_SoulForge message. Does not implicitly {@link m_proto.CS_SoulForge.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_SoulForge
         * @static
         * @param {m_proto.ICS_SoulForge} message CS_SoulForge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_SoulForge.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag_id != null && Object.hasOwnProperty.call(message, "bag_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.bag_id);
            return writer;
        };

        /**
         * Encodes the specified CS_SoulForge message, length delimited. Does not implicitly {@link m_proto.CS_SoulForge.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_SoulForge
         * @static
         * @param {m_proto.ICS_SoulForge} message CS_SoulForge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_SoulForge.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_SoulForge message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_SoulForge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_SoulForge} CS_SoulForge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_SoulForge.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_SoulForge();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bag_id = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_SoulForge message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_SoulForge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_SoulForge} CS_SoulForge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_SoulForge.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_SoulForge message.
         * @function verify
         * @memberof m_proto.CS_SoulForge
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_SoulForge.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag_id != null && message.hasOwnProperty("bag_id"))
                if (!$util.isInteger(message.bag_id) && !(message.bag_id && $util.isInteger(message.bag_id.low) && $util.isInteger(message.bag_id.high)))
                    return "bag_id: integer|Long expected";
            return null;
        };

        /**
         * Creates a CS_SoulForge message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_SoulForge
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_SoulForge} CS_SoulForge
         */
        CS_SoulForge.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_SoulForge)
                return object;
            var message = new $root.m_proto.CS_SoulForge();
            if (object.bag_id != null)
                if ($util.Long)
                    (message.bag_id = $util.Long.fromValue(object.bag_id)).unsigned = true;
                else if (typeof object.bag_id === "string")
                    message.bag_id = parseInt(object.bag_id, 10);
                else if (typeof object.bag_id === "number")
                    message.bag_id = object.bag_id;
                else if (typeof object.bag_id === "object")
                    message.bag_id = new $util.LongBits(object.bag_id.low >>> 0, object.bag_id.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a CS_SoulForge message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_SoulForge
         * @static
         * @param {m_proto.CS_SoulForge} message CS_SoulForge
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_SoulForge.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bag_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bag_id = options.longs === String ? "0" : 0;
            if (message.bag_id != null && message.hasOwnProperty("bag_id"))
                if (typeof message.bag_id === "number")
                    object.bag_id = options.longs === String ? String(message.bag_id) : message.bag_id;
                else
                    object.bag_id = options.longs === String ? $util.Long.prototype.toString.call(message.bag_id) : options.longs === Number ? new $util.LongBits(message.bag_id.low >>> 0, message.bag_id.high >>> 0).toNumber(true) : message.bag_id;
            return object;
        };

        /**
         * Converts this CS_SoulForge to JSON.
         * @function toJSON
         * @memberof m_proto.CS_SoulForge
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_SoulForge.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_SoulForge
         * @function getTypeUrl
         * @memberof m_proto.CS_SoulForge
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_SoulForge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_SoulForge";
        };

        return CS_SoulForge;
    })();

    m_proto.SC_SoulForge = (function() {

        /**
         * Properties of a SC_SoulForge.
         * @memberof m_proto
         * @interface ISC_SoulForge
         * @property {number|null} [err_code] SC_SoulForge err_code
         */

        /**
         * Constructs a new SC_SoulForge.
         * @memberof m_proto
         * @classdesc Represents a SC_SoulForge.
         * @implements ISC_SoulForge
         * @constructor
         * @param {m_proto.ISC_SoulForge=} [properties] Properties to set
         */
        function SC_SoulForge(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_SoulForge err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_SoulForge
         * @instance
         */
        SC_SoulForge.prototype.err_code = 0;

        /**
         * Creates a new SC_SoulForge instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_SoulForge
         * @static
         * @param {m_proto.ISC_SoulForge=} [properties] Properties to set
         * @returns {m_proto.SC_SoulForge} SC_SoulForge instance
         */
        SC_SoulForge.create = function create(properties) {
            return new SC_SoulForge(properties);
        };

        /**
         * Encodes the specified SC_SoulForge message. Does not implicitly {@link m_proto.SC_SoulForge.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_SoulForge
         * @static
         * @param {m_proto.ISC_SoulForge} message SC_SoulForge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_SoulForge.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            return writer;
        };

        /**
         * Encodes the specified SC_SoulForge message, length delimited. Does not implicitly {@link m_proto.SC_SoulForge.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_SoulForge
         * @static
         * @param {m_proto.ISC_SoulForge} message SC_SoulForge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_SoulForge.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_SoulForge message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_SoulForge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_SoulForge} SC_SoulForge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_SoulForge.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_SoulForge();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_SoulForge message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_SoulForge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_SoulForge} SC_SoulForge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_SoulForge.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_SoulForge message.
         * @function verify
         * @memberof m_proto.SC_SoulForge
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_SoulForge.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            return null;
        };

        /**
         * Creates a SC_SoulForge message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_SoulForge
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_SoulForge} SC_SoulForge
         */
        SC_SoulForge.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_SoulForge)
                return object;
            var message = new $root.m_proto.SC_SoulForge();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_SoulForge message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_SoulForge
         * @static
         * @param {m_proto.SC_SoulForge} message SC_SoulForge
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_SoulForge.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err_code = 0;
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            return object;
        };

        /**
         * Converts this SC_SoulForge to JSON.
         * @function toJSON
         * @memberof m_proto.SC_SoulForge
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_SoulForge.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_SoulForge
         * @function getTypeUrl
         * @memberof m_proto.SC_SoulForge
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_SoulForge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_SoulForge";
        };

        return SC_SoulForge;
    })();

    m_proto.SC_BagItemListNtf = (function() {

        /**
         * Properties of a SC_BagItemListNtf.
         * @memberof m_proto
         * @interface ISC_BagItemListNtf
         * @property {Array.<m_proto.IBagItem>|null} [items] SC_BagItemListNtf items
         */

        /**
         * Constructs a new SC_BagItemListNtf.
         * @memberof m_proto
         * @classdesc Represents a SC_BagItemListNtf.
         * @implements ISC_BagItemListNtf
         * @constructor
         * @param {m_proto.ISC_BagItemListNtf=} [properties] Properties to set
         */
        function SC_BagItemListNtf(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_BagItemListNtf items.
         * @member {Array.<m_proto.IBagItem>} items
         * @memberof m_proto.SC_BagItemListNtf
         * @instance
         */
        SC_BagItemListNtf.prototype.items = $util.emptyArray;

        /**
         * Creates a new SC_BagItemListNtf instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_BagItemListNtf
         * @static
         * @param {m_proto.ISC_BagItemListNtf=} [properties] Properties to set
         * @returns {m_proto.SC_BagItemListNtf} SC_BagItemListNtf instance
         */
        SC_BagItemListNtf.create = function create(properties) {
            return new SC_BagItemListNtf(properties);
        };

        /**
         * Encodes the specified SC_BagItemListNtf message. Does not implicitly {@link m_proto.SC_BagItemListNtf.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_BagItemListNtf
         * @static
         * @param {m_proto.ISC_BagItemListNtf} message SC_BagItemListNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagItemListNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.m_proto.BagItem.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SC_BagItemListNtf message, length delimited. Does not implicitly {@link m_proto.SC_BagItemListNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_BagItemListNtf
         * @static
         * @param {m_proto.ISC_BagItemListNtf} message SC_BagItemListNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagItemListNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_BagItemListNtf message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_BagItemListNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_BagItemListNtf} SC_BagItemListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagItemListNtf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_BagItemListNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.m_proto.BagItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_BagItemListNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_BagItemListNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_BagItemListNtf} SC_BagItemListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagItemListNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_BagItemListNtf message.
         * @function verify
         * @memberof m_proto.SC_BagItemListNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_BagItemListNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.m_proto.BagItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SC_BagItemListNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_BagItemListNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_BagItemListNtf} SC_BagItemListNtf
         */
        SC_BagItemListNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_BagItemListNtf)
                return object;
            var message = new $root.m_proto.SC_BagItemListNtf();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".m_proto.SC_BagItemListNtf.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".m_proto.SC_BagItemListNtf.items: object expected");
                    message.items[i] = $root.m_proto.BagItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SC_BagItemListNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_BagItemListNtf
         * @static
         * @param {m_proto.SC_BagItemListNtf} message SC_BagItemListNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_BagItemListNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.m_proto.BagItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this SC_BagItemListNtf to JSON.
         * @function toJSON
         * @memberof m_proto.SC_BagItemListNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_BagItemListNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_BagItemListNtf
         * @function getTypeUrl
         * @memberof m_proto.SC_BagItemListNtf
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_BagItemListNtf.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_BagItemListNtf";
        };

        return SC_BagItemListNtf;
    })();

    m_proto.SC_BagItemListNtf2 = (function() {

        /**
         * Properties of a SC_BagItemListNtf2.
         * @memberof m_proto
         * @interface ISC_BagItemListNtf2
         * @property {Array.<m_proto.IBagItem>|null} [items] SC_BagItemListNtf2 items
         */

        /**
         * Constructs a new SC_BagItemListNtf2.
         * @memberof m_proto
         * @classdesc Represents a SC_BagItemListNtf2.
         * @implements ISC_BagItemListNtf2
         * @constructor
         * @param {m_proto.ISC_BagItemListNtf2=} [properties] Properties to set
         */
        function SC_BagItemListNtf2(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_BagItemListNtf2 items.
         * @member {Array.<m_proto.IBagItem>} items
         * @memberof m_proto.SC_BagItemListNtf2
         * @instance
         */
        SC_BagItemListNtf2.prototype.items = $util.emptyArray;

        /**
         * Creates a new SC_BagItemListNtf2 instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_BagItemListNtf2
         * @static
         * @param {m_proto.ISC_BagItemListNtf2=} [properties] Properties to set
         * @returns {m_proto.SC_BagItemListNtf2} SC_BagItemListNtf2 instance
         */
        SC_BagItemListNtf2.create = function create(properties) {
            return new SC_BagItemListNtf2(properties);
        };

        /**
         * Encodes the specified SC_BagItemListNtf2 message. Does not implicitly {@link m_proto.SC_BagItemListNtf2.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_BagItemListNtf2
         * @static
         * @param {m_proto.ISC_BagItemListNtf2} message SC_BagItemListNtf2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagItemListNtf2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.m_proto.BagItem.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SC_BagItemListNtf2 message, length delimited. Does not implicitly {@link m_proto.SC_BagItemListNtf2.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_BagItemListNtf2
         * @static
         * @param {m_proto.ISC_BagItemListNtf2} message SC_BagItemListNtf2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagItemListNtf2.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_BagItemListNtf2 message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_BagItemListNtf2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_BagItemListNtf2} SC_BagItemListNtf2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagItemListNtf2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_BagItemListNtf2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.m_proto.BagItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_BagItemListNtf2 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_BagItemListNtf2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_BagItemListNtf2} SC_BagItemListNtf2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagItemListNtf2.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_BagItemListNtf2 message.
         * @function verify
         * @memberof m_proto.SC_BagItemListNtf2
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_BagItemListNtf2.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.m_proto.BagItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SC_BagItemListNtf2 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_BagItemListNtf2
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_BagItemListNtf2} SC_BagItemListNtf2
         */
        SC_BagItemListNtf2.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_BagItemListNtf2)
                return object;
            var message = new $root.m_proto.SC_BagItemListNtf2();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".m_proto.SC_BagItemListNtf2.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".m_proto.SC_BagItemListNtf2.items: object expected");
                    message.items[i] = $root.m_proto.BagItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SC_BagItemListNtf2 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_BagItemListNtf2
         * @static
         * @param {m_proto.SC_BagItemListNtf2} message SC_BagItemListNtf2
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_BagItemListNtf2.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.m_proto.BagItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this SC_BagItemListNtf2 to JSON.
         * @function toJSON
         * @memberof m_proto.SC_BagItemListNtf2
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_BagItemListNtf2.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_BagItemListNtf2
         * @function getTypeUrl
         * @memberof m_proto.SC_BagItemListNtf2
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_BagItemListNtf2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_BagItemListNtf2";
        };

        return SC_BagItemListNtf2;
    })();

    m_proto.SC_BagIdListNtf = (function() {

        /**
         * Properties of a SC_BagIdListNtf.
         * @memberof m_proto
         * @interface ISC_BagIdListNtf
         * @property {Array.<number|Long>|null} [bag_ids] SC_BagIdListNtf bag_ids
         */

        /**
         * Constructs a new SC_BagIdListNtf.
         * @memberof m_proto
         * @classdesc Represents a SC_BagIdListNtf.
         * @implements ISC_BagIdListNtf
         * @constructor
         * @param {m_proto.ISC_BagIdListNtf=} [properties] Properties to set
         */
        function SC_BagIdListNtf(properties) {
            this.bag_ids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_BagIdListNtf bag_ids.
         * @member {Array.<number|Long>} bag_ids
         * @memberof m_proto.SC_BagIdListNtf
         * @instance
         */
        SC_BagIdListNtf.prototype.bag_ids = $util.emptyArray;

        /**
         * Creates a new SC_BagIdListNtf instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_BagIdListNtf
         * @static
         * @param {m_proto.ISC_BagIdListNtf=} [properties] Properties to set
         * @returns {m_proto.SC_BagIdListNtf} SC_BagIdListNtf instance
         */
        SC_BagIdListNtf.create = function create(properties) {
            return new SC_BagIdListNtf(properties);
        };

        /**
         * Encodes the specified SC_BagIdListNtf message. Does not implicitly {@link m_proto.SC_BagIdListNtf.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_BagIdListNtf
         * @static
         * @param {m_proto.ISC_BagIdListNtf} message SC_BagIdListNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagIdListNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag_ids != null && message.bag_ids.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.bag_ids.length; ++i)
                    writer.uint64(message.bag_ids[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified SC_BagIdListNtf message, length delimited. Does not implicitly {@link m_proto.SC_BagIdListNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_BagIdListNtf
         * @static
         * @param {m_proto.ISC_BagIdListNtf} message SC_BagIdListNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagIdListNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_BagIdListNtf message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_BagIdListNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_BagIdListNtf} SC_BagIdListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagIdListNtf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_BagIdListNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.bag_ids && message.bag_ids.length))
                            message.bag_ids = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.bag_ids.push(reader.uint64());
                        } else
                            message.bag_ids.push(reader.uint64());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_BagIdListNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_BagIdListNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_BagIdListNtf} SC_BagIdListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagIdListNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_BagIdListNtf message.
         * @function verify
         * @memberof m_proto.SC_BagIdListNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_BagIdListNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag_ids != null && message.hasOwnProperty("bag_ids")) {
                if (!Array.isArray(message.bag_ids))
                    return "bag_ids: array expected";
                for (var i = 0; i < message.bag_ids.length; ++i)
                    if (!$util.isInteger(message.bag_ids[i]) && !(message.bag_ids[i] && $util.isInteger(message.bag_ids[i].low) && $util.isInteger(message.bag_ids[i].high)))
                        return "bag_ids: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a SC_BagIdListNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_BagIdListNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_BagIdListNtf} SC_BagIdListNtf
         */
        SC_BagIdListNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_BagIdListNtf)
                return object;
            var message = new $root.m_proto.SC_BagIdListNtf();
            if (object.bag_ids) {
                if (!Array.isArray(object.bag_ids))
                    throw TypeError(".m_proto.SC_BagIdListNtf.bag_ids: array expected");
                message.bag_ids = [];
                for (var i = 0; i < object.bag_ids.length; ++i)
                    if ($util.Long)
                        (message.bag_ids[i] = $util.Long.fromValue(object.bag_ids[i])).unsigned = true;
                    else if (typeof object.bag_ids[i] === "string")
                        message.bag_ids[i] = parseInt(object.bag_ids[i], 10);
                    else if (typeof object.bag_ids[i] === "number")
                        message.bag_ids[i] = object.bag_ids[i];
                    else if (typeof object.bag_ids[i] === "object")
                        message.bag_ids[i] = new $util.LongBits(object.bag_ids[i].low >>> 0, object.bag_ids[i].high >>> 0).toNumber(true);
            }
            return message;
        };

        /**
         * Creates a plain object from a SC_BagIdListNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_BagIdListNtf
         * @static
         * @param {m_proto.SC_BagIdListNtf} message SC_BagIdListNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_BagIdListNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.bag_ids = [];
            if (message.bag_ids && message.bag_ids.length) {
                object.bag_ids = [];
                for (var j = 0; j < message.bag_ids.length; ++j)
                    if (typeof message.bag_ids[j] === "number")
                        object.bag_ids[j] = options.longs === String ? String(message.bag_ids[j]) : message.bag_ids[j];
                    else
                        object.bag_ids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.bag_ids[j]) : options.longs === Number ? new $util.LongBits(message.bag_ids[j].low >>> 0, message.bag_ids[j].high >>> 0).toNumber(true) : message.bag_ids[j];
            }
            return object;
        };

        /**
         * Converts this SC_BagIdListNtf to JSON.
         * @function toJSON
         * @memberof m_proto.SC_BagIdListNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_BagIdListNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_BagIdListNtf
         * @function getTypeUrl
         * @memberof m_proto.SC_BagIdListNtf
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_BagIdListNtf.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_BagIdListNtf";
        };

        return SC_BagIdListNtf;
    })();

    m_proto.SC_BagIdListNtf2 = (function() {

        /**
         * Properties of a SC_BagIdListNtf2.
         * @memberof m_proto
         * @interface ISC_BagIdListNtf2
         * @property {Array.<number|Long>|null} [bag_ids] SC_BagIdListNtf2 bag_ids
         */

        /**
         * Constructs a new SC_BagIdListNtf2.
         * @memberof m_proto
         * @classdesc Represents a SC_BagIdListNtf2.
         * @implements ISC_BagIdListNtf2
         * @constructor
         * @param {m_proto.ISC_BagIdListNtf2=} [properties] Properties to set
         */
        function SC_BagIdListNtf2(properties) {
            this.bag_ids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_BagIdListNtf2 bag_ids.
         * @member {Array.<number|Long>} bag_ids
         * @memberof m_proto.SC_BagIdListNtf2
         * @instance
         */
        SC_BagIdListNtf2.prototype.bag_ids = $util.emptyArray;

        /**
         * Creates a new SC_BagIdListNtf2 instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_BagIdListNtf2
         * @static
         * @param {m_proto.ISC_BagIdListNtf2=} [properties] Properties to set
         * @returns {m_proto.SC_BagIdListNtf2} SC_BagIdListNtf2 instance
         */
        SC_BagIdListNtf2.create = function create(properties) {
            return new SC_BagIdListNtf2(properties);
        };

        /**
         * Encodes the specified SC_BagIdListNtf2 message. Does not implicitly {@link m_proto.SC_BagIdListNtf2.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_BagIdListNtf2
         * @static
         * @param {m_proto.ISC_BagIdListNtf2} message SC_BagIdListNtf2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagIdListNtf2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag_ids != null && message.bag_ids.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.bag_ids.length; ++i)
                    writer.uint64(message.bag_ids[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified SC_BagIdListNtf2 message, length delimited. Does not implicitly {@link m_proto.SC_BagIdListNtf2.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_BagIdListNtf2
         * @static
         * @param {m_proto.ISC_BagIdListNtf2} message SC_BagIdListNtf2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagIdListNtf2.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_BagIdListNtf2 message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_BagIdListNtf2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_BagIdListNtf2} SC_BagIdListNtf2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagIdListNtf2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_BagIdListNtf2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.bag_ids && message.bag_ids.length))
                            message.bag_ids = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.bag_ids.push(reader.uint64());
                        } else
                            message.bag_ids.push(reader.uint64());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_BagIdListNtf2 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_BagIdListNtf2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_BagIdListNtf2} SC_BagIdListNtf2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagIdListNtf2.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_BagIdListNtf2 message.
         * @function verify
         * @memberof m_proto.SC_BagIdListNtf2
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_BagIdListNtf2.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag_ids != null && message.hasOwnProperty("bag_ids")) {
                if (!Array.isArray(message.bag_ids))
                    return "bag_ids: array expected";
                for (var i = 0; i < message.bag_ids.length; ++i)
                    if (!$util.isInteger(message.bag_ids[i]) && !(message.bag_ids[i] && $util.isInteger(message.bag_ids[i].low) && $util.isInteger(message.bag_ids[i].high)))
                        return "bag_ids: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a SC_BagIdListNtf2 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_BagIdListNtf2
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_BagIdListNtf2} SC_BagIdListNtf2
         */
        SC_BagIdListNtf2.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_BagIdListNtf2)
                return object;
            var message = new $root.m_proto.SC_BagIdListNtf2();
            if (object.bag_ids) {
                if (!Array.isArray(object.bag_ids))
                    throw TypeError(".m_proto.SC_BagIdListNtf2.bag_ids: array expected");
                message.bag_ids = [];
                for (var i = 0; i < object.bag_ids.length; ++i)
                    if ($util.Long)
                        (message.bag_ids[i] = $util.Long.fromValue(object.bag_ids[i])).unsigned = true;
                    else if (typeof object.bag_ids[i] === "string")
                        message.bag_ids[i] = parseInt(object.bag_ids[i], 10);
                    else if (typeof object.bag_ids[i] === "number")
                        message.bag_ids[i] = object.bag_ids[i];
                    else if (typeof object.bag_ids[i] === "object")
                        message.bag_ids[i] = new $util.LongBits(object.bag_ids[i].low >>> 0, object.bag_ids[i].high >>> 0).toNumber(true);
            }
            return message;
        };

        /**
         * Creates a plain object from a SC_BagIdListNtf2 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_BagIdListNtf2
         * @static
         * @param {m_proto.SC_BagIdListNtf2} message SC_BagIdListNtf2
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_BagIdListNtf2.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.bag_ids = [];
            if (message.bag_ids && message.bag_ids.length) {
                object.bag_ids = [];
                for (var j = 0; j < message.bag_ids.length; ++j)
                    if (typeof message.bag_ids[j] === "number")
                        object.bag_ids[j] = options.longs === String ? String(message.bag_ids[j]) : message.bag_ids[j];
                    else
                        object.bag_ids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.bag_ids[j]) : options.longs === Number ? new $util.LongBits(message.bag_ids[j].low >>> 0, message.bag_ids[j].high >>> 0).toNumber(true) : message.bag_ids[j];
            }
            return object;
        };

        /**
         * Converts this SC_BagIdListNtf2 to JSON.
         * @function toJSON
         * @memberof m_proto.SC_BagIdListNtf2
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_BagIdListNtf2.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_BagIdListNtf2
         * @function getTypeUrl
         * @memberof m_proto.SC_BagIdListNtf2
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_BagIdListNtf2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_BagIdListNtf2";
        };

        return SC_BagIdListNtf2;
    })();

    m_proto.SC_BagPageListNtf = (function() {

        /**
         * Properties of a SC_BagPageListNtf.
         * @memberof m_proto
         * @interface ISC_BagPageListNtf
         * @property {Array.<number>|null} [pages] SC_BagPageListNtf pages
         */

        /**
         * Constructs a new SC_BagPageListNtf.
         * @memberof m_proto
         * @classdesc Represents a SC_BagPageListNtf.
         * @implements ISC_BagPageListNtf
         * @constructor
         * @param {m_proto.ISC_BagPageListNtf=} [properties] Properties to set
         */
        function SC_BagPageListNtf(properties) {
            this.pages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_BagPageListNtf pages.
         * @member {Array.<number>} pages
         * @memberof m_proto.SC_BagPageListNtf
         * @instance
         */
        SC_BagPageListNtf.prototype.pages = $util.emptyArray;

        /**
         * Creates a new SC_BagPageListNtf instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_BagPageListNtf
         * @static
         * @param {m_proto.ISC_BagPageListNtf=} [properties] Properties to set
         * @returns {m_proto.SC_BagPageListNtf} SC_BagPageListNtf instance
         */
        SC_BagPageListNtf.create = function create(properties) {
            return new SC_BagPageListNtf(properties);
        };

        /**
         * Encodes the specified SC_BagPageListNtf message. Does not implicitly {@link m_proto.SC_BagPageListNtf.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_BagPageListNtf
         * @static
         * @param {m_proto.ISC_BagPageListNtf} message SC_BagPageListNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagPageListNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pages != null && message.pages.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.pages.length; ++i)
                    writer.uint32(message.pages[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified SC_BagPageListNtf message, length delimited. Does not implicitly {@link m_proto.SC_BagPageListNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_BagPageListNtf
         * @static
         * @param {m_proto.ISC_BagPageListNtf} message SC_BagPageListNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagPageListNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_BagPageListNtf message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_BagPageListNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_BagPageListNtf} SC_BagPageListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagPageListNtf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_BagPageListNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.pages && message.pages.length))
                            message.pages = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.pages.push(reader.uint32());
                        } else
                            message.pages.push(reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_BagPageListNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_BagPageListNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_BagPageListNtf} SC_BagPageListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagPageListNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_BagPageListNtf message.
         * @function verify
         * @memberof m_proto.SC_BagPageListNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_BagPageListNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pages != null && message.hasOwnProperty("pages")) {
                if (!Array.isArray(message.pages))
                    return "pages: array expected";
                for (var i = 0; i < message.pages.length; ++i)
                    if (!$util.isInteger(message.pages[i]))
                        return "pages: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a SC_BagPageListNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_BagPageListNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_BagPageListNtf} SC_BagPageListNtf
         */
        SC_BagPageListNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_BagPageListNtf)
                return object;
            var message = new $root.m_proto.SC_BagPageListNtf();
            if (object.pages) {
                if (!Array.isArray(object.pages))
                    throw TypeError(".m_proto.SC_BagPageListNtf.pages: array expected");
                message.pages = [];
                for (var i = 0; i < object.pages.length; ++i)
                    message.pages[i] = object.pages[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a SC_BagPageListNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_BagPageListNtf
         * @static
         * @param {m_proto.SC_BagPageListNtf} message SC_BagPageListNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_BagPageListNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pages = [];
            if (message.pages && message.pages.length) {
                object.pages = [];
                for (var j = 0; j < message.pages.length; ++j)
                    object.pages[j] = message.pages[j];
            }
            return object;
        };

        /**
         * Converts this SC_BagPageListNtf to JSON.
         * @function toJSON
         * @memberof m_proto.SC_BagPageListNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_BagPageListNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_BagPageListNtf
         * @function getTypeUrl
         * @memberof m_proto.SC_BagPageListNtf
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_BagPageListNtf.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_BagPageListNtf";
        };

        return SC_BagPageListNtf;
    })();

    m_proto.SC_BagSingleIdNtf = (function() {

        /**
         * Properties of a SC_BagSingleIdNtf.
         * @memberof m_proto
         * @interface ISC_BagSingleIdNtf
         * @property {number|Long|null} [bag_id] SC_BagSingleIdNtf bag_id
         */

        /**
         * Constructs a new SC_BagSingleIdNtf.
         * @memberof m_proto
         * @classdesc Represents a SC_BagSingleIdNtf.
         * @implements ISC_BagSingleIdNtf
         * @constructor
         * @param {m_proto.ISC_BagSingleIdNtf=} [properties] Properties to set
         */
        function SC_BagSingleIdNtf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_BagSingleIdNtf bag_id.
         * @member {number|Long} bag_id
         * @memberof m_proto.SC_BagSingleIdNtf
         * @instance
         */
        SC_BagSingleIdNtf.prototype.bag_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new SC_BagSingleIdNtf instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_BagSingleIdNtf
         * @static
         * @param {m_proto.ISC_BagSingleIdNtf=} [properties] Properties to set
         * @returns {m_proto.SC_BagSingleIdNtf} SC_BagSingleIdNtf instance
         */
        SC_BagSingleIdNtf.create = function create(properties) {
            return new SC_BagSingleIdNtf(properties);
        };

        /**
         * Encodes the specified SC_BagSingleIdNtf message. Does not implicitly {@link m_proto.SC_BagSingleIdNtf.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_BagSingleIdNtf
         * @static
         * @param {m_proto.ISC_BagSingleIdNtf} message SC_BagSingleIdNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagSingleIdNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bag_id != null && Object.hasOwnProperty.call(message, "bag_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.bag_id);
            return writer;
        };

        /**
         * Encodes the specified SC_BagSingleIdNtf message, length delimited. Does not implicitly {@link m_proto.SC_BagSingleIdNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_BagSingleIdNtf
         * @static
         * @param {m_proto.ISC_BagSingleIdNtf} message SC_BagSingleIdNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagSingleIdNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_BagSingleIdNtf message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_BagSingleIdNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_BagSingleIdNtf} SC_BagSingleIdNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagSingleIdNtf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_BagSingleIdNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bag_id = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_BagSingleIdNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_BagSingleIdNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_BagSingleIdNtf} SC_BagSingleIdNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagSingleIdNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_BagSingleIdNtf message.
         * @function verify
         * @memberof m_proto.SC_BagSingleIdNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_BagSingleIdNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bag_id != null && message.hasOwnProperty("bag_id"))
                if (!$util.isInteger(message.bag_id) && !(message.bag_id && $util.isInteger(message.bag_id.low) && $util.isInteger(message.bag_id.high)))
                    return "bag_id: integer|Long expected";
            return null;
        };

        /**
         * Creates a SC_BagSingleIdNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_BagSingleIdNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_BagSingleIdNtf} SC_BagSingleIdNtf
         */
        SC_BagSingleIdNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_BagSingleIdNtf)
                return object;
            var message = new $root.m_proto.SC_BagSingleIdNtf();
            if (object.bag_id != null)
                if ($util.Long)
                    (message.bag_id = $util.Long.fromValue(object.bag_id)).unsigned = true;
                else if (typeof object.bag_id === "string")
                    message.bag_id = parseInt(object.bag_id, 10);
                else if (typeof object.bag_id === "number")
                    message.bag_id = object.bag_id;
                else if (typeof object.bag_id === "object")
                    message.bag_id = new $util.LongBits(object.bag_id.low >>> 0, object.bag_id.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a SC_BagSingleIdNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_BagSingleIdNtf
         * @static
         * @param {m_proto.SC_BagSingleIdNtf} message SC_BagSingleIdNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_BagSingleIdNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bag_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bag_id = options.longs === String ? "0" : 0;
            if (message.bag_id != null && message.hasOwnProperty("bag_id"))
                if (typeof message.bag_id === "number")
                    object.bag_id = options.longs === String ? String(message.bag_id) : message.bag_id;
                else
                    object.bag_id = options.longs === String ? $util.Long.prototype.toString.call(message.bag_id) : options.longs === Number ? new $util.LongBits(message.bag_id.low >>> 0, message.bag_id.high >>> 0).toNumber(true) : message.bag_id;
            return object;
        };

        /**
         * Converts this SC_BagSingleIdNtf to JSON.
         * @function toJSON
         * @memberof m_proto.SC_BagSingleIdNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_BagSingleIdNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_BagSingleIdNtf
         * @function getTypeUrl
         * @memberof m_proto.SC_BagSingleIdNtf
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_BagSingleIdNtf.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_BagSingleIdNtf";
        };

        return SC_BagSingleIdNtf;
    })();

    m_proto.SC_BagPartNtf = (function() {

        /**
         * Properties of a SC_BagPartNtf.
         * @memberof m_proto
         * @interface ISC_BagPartNtf
         * @property {number|null} [part] SC_BagPartNtf part
         */

        /**
         * Constructs a new SC_BagPartNtf.
         * @memberof m_proto
         * @classdesc Represents a SC_BagPartNtf.
         * @implements ISC_BagPartNtf
         * @constructor
         * @param {m_proto.ISC_BagPartNtf=} [properties] Properties to set
         */
        function SC_BagPartNtf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_BagPartNtf part.
         * @member {number} part
         * @memberof m_proto.SC_BagPartNtf
         * @instance
         */
        SC_BagPartNtf.prototype.part = 0;

        /**
         * Creates a new SC_BagPartNtf instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_BagPartNtf
         * @static
         * @param {m_proto.ISC_BagPartNtf=} [properties] Properties to set
         * @returns {m_proto.SC_BagPartNtf} SC_BagPartNtf instance
         */
        SC_BagPartNtf.create = function create(properties) {
            return new SC_BagPartNtf(properties);
        };

        /**
         * Encodes the specified SC_BagPartNtf message. Does not implicitly {@link m_proto.SC_BagPartNtf.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_BagPartNtf
         * @static
         * @param {m_proto.ISC_BagPartNtf} message SC_BagPartNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagPartNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.part != null && Object.hasOwnProperty.call(message, "part"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.part);
            return writer;
        };

        /**
         * Encodes the specified SC_BagPartNtf message, length delimited. Does not implicitly {@link m_proto.SC_BagPartNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_BagPartNtf
         * @static
         * @param {m_proto.ISC_BagPartNtf} message SC_BagPartNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagPartNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_BagPartNtf message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_BagPartNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_BagPartNtf} SC_BagPartNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagPartNtf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_BagPartNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.part = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_BagPartNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_BagPartNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_BagPartNtf} SC_BagPartNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagPartNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_BagPartNtf message.
         * @function verify
         * @memberof m_proto.SC_BagPartNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_BagPartNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.part != null && message.hasOwnProperty("part"))
                if (!$util.isInteger(message.part))
                    return "part: integer expected";
            return null;
        };

        /**
         * Creates a SC_BagPartNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_BagPartNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_BagPartNtf} SC_BagPartNtf
         */
        SC_BagPartNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_BagPartNtf)
                return object;
            var message = new $root.m_proto.SC_BagPartNtf();
            if (object.part != null)
                message.part = object.part >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_BagPartNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_BagPartNtf
         * @static
         * @param {m_proto.SC_BagPartNtf} message SC_BagPartNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_BagPartNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.part = 0;
            if (message.part != null && message.hasOwnProperty("part"))
                object.part = message.part;
            return object;
        };

        /**
         * Converts this SC_BagPartNtf to JSON.
         * @function toJSON
         * @memberof m_proto.SC_BagPartNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_BagPartNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_BagPartNtf
         * @function getTypeUrl
         * @memberof m_proto.SC_BagPartNtf
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_BagPartNtf.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_BagPartNtf";
        };

        return SC_BagPartNtf;
    })();

    m_proto.SC_BagPartNtf2 = (function() {

        /**
         * Properties of a SC_BagPartNtf2.
         * @memberof m_proto
         * @interface ISC_BagPartNtf2
         * @property {number|null} [part] SC_BagPartNtf2 part
         */

        /**
         * Constructs a new SC_BagPartNtf2.
         * @memberof m_proto
         * @classdesc Represents a SC_BagPartNtf2.
         * @implements ISC_BagPartNtf2
         * @constructor
         * @param {m_proto.ISC_BagPartNtf2=} [properties] Properties to set
         */
        function SC_BagPartNtf2(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_BagPartNtf2 part.
         * @member {number} part
         * @memberof m_proto.SC_BagPartNtf2
         * @instance
         */
        SC_BagPartNtf2.prototype.part = 0;

        /**
         * Creates a new SC_BagPartNtf2 instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_BagPartNtf2
         * @static
         * @param {m_proto.ISC_BagPartNtf2=} [properties] Properties to set
         * @returns {m_proto.SC_BagPartNtf2} SC_BagPartNtf2 instance
         */
        SC_BagPartNtf2.create = function create(properties) {
            return new SC_BagPartNtf2(properties);
        };

        /**
         * Encodes the specified SC_BagPartNtf2 message. Does not implicitly {@link m_proto.SC_BagPartNtf2.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_BagPartNtf2
         * @static
         * @param {m_proto.ISC_BagPartNtf2} message SC_BagPartNtf2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagPartNtf2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.part != null && Object.hasOwnProperty.call(message, "part"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.part);
            return writer;
        };

        /**
         * Encodes the specified SC_BagPartNtf2 message, length delimited. Does not implicitly {@link m_proto.SC_BagPartNtf2.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_BagPartNtf2
         * @static
         * @param {m_proto.ISC_BagPartNtf2} message SC_BagPartNtf2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagPartNtf2.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_BagPartNtf2 message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_BagPartNtf2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_BagPartNtf2} SC_BagPartNtf2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagPartNtf2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_BagPartNtf2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.part = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_BagPartNtf2 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_BagPartNtf2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_BagPartNtf2} SC_BagPartNtf2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagPartNtf2.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_BagPartNtf2 message.
         * @function verify
         * @memberof m_proto.SC_BagPartNtf2
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_BagPartNtf2.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.part != null && message.hasOwnProperty("part"))
                if (!$util.isInteger(message.part))
                    return "part: integer expected";
            return null;
        };

        /**
         * Creates a SC_BagPartNtf2 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_BagPartNtf2
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_BagPartNtf2} SC_BagPartNtf2
         */
        SC_BagPartNtf2.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_BagPartNtf2)
                return object;
            var message = new $root.m_proto.SC_BagPartNtf2();
            if (object.part != null)
                message.part = object.part >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_BagPartNtf2 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_BagPartNtf2
         * @static
         * @param {m_proto.SC_BagPartNtf2} message SC_BagPartNtf2
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_BagPartNtf2.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.part = 0;
            if (message.part != null && message.hasOwnProperty("part"))
                object.part = message.part;
            return object;
        };

        /**
         * Converts this SC_BagPartNtf2 to JSON.
         * @function toJSON
         * @memberof m_proto.SC_BagPartNtf2
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_BagPartNtf2.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_BagPartNtf2
         * @function getTypeUrl
         * @memberof m_proto.SC_BagPartNtf2
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_BagPartNtf2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_BagPartNtf2";
        };

        return SC_BagPartNtf2;
    })();

    m_proto.SC_BagTipNtf = (function() {

        /**
         * Properties of a SC_BagTipNtf.
         * @memberof m_proto
         * @interface ISC_BagTipNtf
         * @property {string|null} [message] SC_BagTipNtf message
         */

        /**
         * Constructs a new SC_BagTipNtf.
         * @memberof m_proto
         * @classdesc Represents a SC_BagTipNtf.
         * @implements ISC_BagTipNtf
         * @constructor
         * @param {m_proto.ISC_BagTipNtf=} [properties] Properties to set
         */
        function SC_BagTipNtf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_BagTipNtf message.
         * @member {string} message
         * @memberof m_proto.SC_BagTipNtf
         * @instance
         */
        SC_BagTipNtf.prototype.message = "";

        /**
         * Creates a new SC_BagTipNtf instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_BagTipNtf
         * @static
         * @param {m_proto.ISC_BagTipNtf=} [properties] Properties to set
         * @returns {m_proto.SC_BagTipNtf} SC_BagTipNtf instance
         */
        SC_BagTipNtf.create = function create(properties) {
            return new SC_BagTipNtf(properties);
        };

        /**
         * Encodes the specified SC_BagTipNtf message. Does not implicitly {@link m_proto.SC_BagTipNtf.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_BagTipNtf
         * @static
         * @param {m_proto.ISC_BagTipNtf} message SC_BagTipNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagTipNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified SC_BagTipNtf message, length delimited. Does not implicitly {@link m_proto.SC_BagTipNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_BagTipNtf
         * @static
         * @param {m_proto.ISC_BagTipNtf} message SC_BagTipNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_BagTipNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_BagTipNtf message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_BagTipNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_BagTipNtf} SC_BagTipNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagTipNtf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_BagTipNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_BagTipNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_BagTipNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_BagTipNtf} SC_BagTipNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_BagTipNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_BagTipNtf message.
         * @function verify
         * @memberof m_proto.SC_BagTipNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_BagTipNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a SC_BagTipNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_BagTipNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_BagTipNtf} SC_BagTipNtf
         */
        SC_BagTipNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_BagTipNtf)
                return object;
            var message = new $root.m_proto.SC_BagTipNtf();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a SC_BagTipNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_BagTipNtf
         * @static
         * @param {m_proto.SC_BagTipNtf} message SC_BagTipNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_BagTipNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this SC_BagTipNtf to JSON.
         * @function toJSON
         * @memberof m_proto.SC_BagTipNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_BagTipNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_BagTipNtf
         * @function getTypeUrl
         * @memberof m_proto.SC_BagTipNtf
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_BagTipNtf.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_BagTipNtf";
        };

        return SC_BagTipNtf;
    })();

    m_proto.PlayerResource = (function() {

        /**
         * Properties of a PlayerResource.
         * @memberof m_proto
         * @interface IPlayerResource
         * @property {number|null} [id] PlayerResource id
         * @property {number|null} [count] PlayerResource count
         */

        /**
         * Constructs a new PlayerResource.
         * @memberof m_proto
         * @classdesc Represents a PlayerResource.
         * @implements IPlayerResource
         * @constructor
         * @param {m_proto.IPlayerResource=} [properties] Properties to set
         */
        function PlayerResource(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerResource id.
         * @member {number} id
         * @memberof m_proto.PlayerResource
         * @instance
         */
        PlayerResource.prototype.id = 0;

        /**
         * PlayerResource count.
         * @member {number} count
         * @memberof m_proto.PlayerResource
         * @instance
         */
        PlayerResource.prototype.count = 0;

        /**
         * Creates a new PlayerResource instance using the specified properties.
         * @function create
         * @memberof m_proto.PlayerResource
         * @static
         * @param {m_proto.IPlayerResource=} [properties] Properties to set
         * @returns {m_proto.PlayerResource} PlayerResource instance
         */
        PlayerResource.create = function create(properties) {
            return new PlayerResource(properties);
        };

        /**
         * Encodes the specified PlayerResource message. Does not implicitly {@link m_proto.PlayerResource.verify|verify} messages.
         * @function encode
         * @memberof m_proto.PlayerResource
         * @static
         * @param {m_proto.IPlayerResource} message PlayerResource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerResource.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.count);
            return writer;
        };

        /**
         * Encodes the specified PlayerResource message, length delimited. Does not implicitly {@link m_proto.PlayerResource.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.PlayerResource
         * @static
         * @param {m_proto.IPlayerResource} message PlayerResource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerResource.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerResource message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.PlayerResource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.PlayerResource} PlayerResource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerResource.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.PlayerResource();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.count = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerResource message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.PlayerResource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.PlayerResource} PlayerResource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerResource.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerResource message.
         * @function verify
         * @memberof m_proto.PlayerResource
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerResource.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            return null;
        };

        /**
         * Creates a PlayerResource message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.PlayerResource
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.PlayerResource} PlayerResource
         */
        PlayerResource.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.PlayerResource)
                return object;
            var message = new $root.m_proto.PlayerResource();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.count != null)
                message.count = object.count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerResource message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.PlayerResource
         * @static
         * @param {m_proto.PlayerResource} message PlayerResource
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerResource.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.count = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this PlayerResource to JSON.
         * @function toJSON
         * @memberof m_proto.PlayerResource
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerResource.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerResource
         * @function getTypeUrl
         * @memberof m_proto.PlayerResource
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerResource.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.PlayerResource";
        };

        return PlayerResource;
    })();

    m_proto.CS_VerifyAccount = (function() {

        /**
         * Properties of a CS_VerifyAccount.
         * @memberof m_proto
         * @interface ICS_VerifyAccount
         * @property {string|null} [uid] CS_VerifyAccount uid
         * @property {string|null} [sessionid] CS_VerifyAccount sessionid
         * @property {string|null} [data] CS_VerifyAccount data
         * @property {number|null} [channel_type] CS_VerifyAccount channel_type
         * @property {number|null} [sys_type] CS_VerifyAccount sys_type
         */

        /**
         * Constructs a new CS_VerifyAccount.
         * @memberof m_proto
         * @classdesc Represents a CS_VerifyAccount.
         * @implements ICS_VerifyAccount
         * @constructor
         * @param {m_proto.ICS_VerifyAccount=} [properties] Properties to set
         */
        function CS_VerifyAccount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_VerifyAccount uid.
         * @member {string} uid
         * @memberof m_proto.CS_VerifyAccount
         * @instance
         */
        CS_VerifyAccount.prototype.uid = "";

        /**
         * CS_VerifyAccount sessionid.
         * @member {string} sessionid
         * @memberof m_proto.CS_VerifyAccount
         * @instance
         */
        CS_VerifyAccount.prototype.sessionid = "";

        /**
         * CS_VerifyAccount data.
         * @member {string} data
         * @memberof m_proto.CS_VerifyAccount
         * @instance
         */
        CS_VerifyAccount.prototype.data = "";

        /**
         * CS_VerifyAccount channel_type.
         * @member {number} channel_type
         * @memberof m_proto.CS_VerifyAccount
         * @instance
         */
        CS_VerifyAccount.prototype.channel_type = 0;

        /**
         * CS_VerifyAccount sys_type.
         * @member {number} sys_type
         * @memberof m_proto.CS_VerifyAccount
         * @instance
         */
        CS_VerifyAccount.prototype.sys_type = 0;

        /**
         * Creates a new CS_VerifyAccount instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_VerifyAccount
         * @static
         * @param {m_proto.ICS_VerifyAccount=} [properties] Properties to set
         * @returns {m_proto.CS_VerifyAccount} CS_VerifyAccount instance
         */
        CS_VerifyAccount.create = function create(properties) {
            return new CS_VerifyAccount(properties);
        };

        /**
         * Encodes the specified CS_VerifyAccount message. Does not implicitly {@link m_proto.CS_VerifyAccount.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_VerifyAccount
         * @static
         * @param {m_proto.ICS_VerifyAccount} message CS_VerifyAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_VerifyAccount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.sessionid != null && Object.hasOwnProperty.call(message, "sessionid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sessionid);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.data);
            if (message.channel_type != null && Object.hasOwnProperty.call(message, "channel_type"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.channel_type);
            if (message.sys_type != null && Object.hasOwnProperty.call(message, "sys_type"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.sys_type);
            return writer;
        };

        /**
         * Encodes the specified CS_VerifyAccount message, length delimited. Does not implicitly {@link m_proto.CS_VerifyAccount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_VerifyAccount
         * @static
         * @param {m_proto.ICS_VerifyAccount} message CS_VerifyAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_VerifyAccount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_VerifyAccount message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_VerifyAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_VerifyAccount} CS_VerifyAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_VerifyAccount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_VerifyAccount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                case 2: {
                        message.sessionid = reader.string();
                        break;
                    }
                case 3: {
                        message.data = reader.string();
                        break;
                    }
                case 4: {
                        message.channel_type = reader.uint32();
                        break;
                    }
                case 5: {
                        message.sys_type = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_VerifyAccount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_VerifyAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_VerifyAccount} CS_VerifyAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_VerifyAccount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_VerifyAccount message.
         * @function verify
         * @memberof m_proto.CS_VerifyAccount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_VerifyAccount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (!$util.isString(message.sessionid))
                    return "sessionid: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            if (message.channel_type != null && message.hasOwnProperty("channel_type"))
                if (!$util.isInteger(message.channel_type))
                    return "channel_type: integer expected";
            if (message.sys_type != null && message.hasOwnProperty("sys_type"))
                if (!$util.isInteger(message.sys_type))
                    return "sys_type: integer expected";
            return null;
        };

        /**
         * Creates a CS_VerifyAccount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_VerifyAccount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_VerifyAccount} CS_VerifyAccount
         */
        CS_VerifyAccount.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_VerifyAccount)
                return object;
            var message = new $root.m_proto.CS_VerifyAccount();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.sessionid != null)
                message.sessionid = String(object.sessionid);
            if (object.data != null)
                message.data = String(object.data);
            if (object.channel_type != null)
                message.channel_type = object.channel_type >>> 0;
            if (object.sys_type != null)
                message.sys_type = object.sys_type >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CS_VerifyAccount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_VerifyAccount
         * @static
         * @param {m_proto.CS_VerifyAccount} message CS_VerifyAccount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_VerifyAccount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.sessionid = "";
                object.data = "";
                object.channel_type = 0;
                object.sys_type = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                object.sessionid = message.sessionid;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            if (message.channel_type != null && message.hasOwnProperty("channel_type"))
                object.channel_type = message.channel_type;
            if (message.sys_type != null && message.hasOwnProperty("sys_type"))
                object.sys_type = message.sys_type;
            return object;
        };

        /**
         * Converts this CS_VerifyAccount to JSON.
         * @function toJSON
         * @memberof m_proto.CS_VerifyAccount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_VerifyAccount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_VerifyAccount
         * @function getTypeUrl
         * @memberof m_proto.CS_VerifyAccount
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_VerifyAccount.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_VerifyAccount";
        };

        return CS_VerifyAccount;
    })();

    m_proto.SC_VerifyAccount = (function() {

        /**
         * Properties of a SC_VerifyAccount.
         * @memberof m_proto
         * @interface ISC_VerifyAccount
         * @property {number|null} [err_code] SC_VerifyAccount err_code
         */

        /**
         * Constructs a new SC_VerifyAccount.
         * @memberof m_proto
         * @classdesc Represents a SC_VerifyAccount.
         * @implements ISC_VerifyAccount
         * @constructor
         * @param {m_proto.ISC_VerifyAccount=} [properties] Properties to set
         */
        function SC_VerifyAccount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_VerifyAccount err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_VerifyAccount
         * @instance
         */
        SC_VerifyAccount.prototype.err_code = 0;

        /**
         * Creates a new SC_VerifyAccount instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_VerifyAccount
         * @static
         * @param {m_proto.ISC_VerifyAccount=} [properties] Properties to set
         * @returns {m_proto.SC_VerifyAccount} SC_VerifyAccount instance
         */
        SC_VerifyAccount.create = function create(properties) {
            return new SC_VerifyAccount(properties);
        };

        /**
         * Encodes the specified SC_VerifyAccount message. Does not implicitly {@link m_proto.SC_VerifyAccount.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_VerifyAccount
         * @static
         * @param {m_proto.ISC_VerifyAccount} message SC_VerifyAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_VerifyAccount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            return writer;
        };

        /**
         * Encodes the specified SC_VerifyAccount message, length delimited. Does not implicitly {@link m_proto.SC_VerifyAccount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_VerifyAccount
         * @static
         * @param {m_proto.ISC_VerifyAccount} message SC_VerifyAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_VerifyAccount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_VerifyAccount message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_VerifyAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_VerifyAccount} SC_VerifyAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_VerifyAccount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_VerifyAccount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_VerifyAccount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_VerifyAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_VerifyAccount} SC_VerifyAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_VerifyAccount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_VerifyAccount message.
         * @function verify
         * @memberof m_proto.SC_VerifyAccount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_VerifyAccount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            return null;
        };

        /**
         * Creates a SC_VerifyAccount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_VerifyAccount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_VerifyAccount} SC_VerifyAccount
         */
        SC_VerifyAccount.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_VerifyAccount)
                return object;
            var message = new $root.m_proto.SC_VerifyAccount();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_VerifyAccount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_VerifyAccount
         * @static
         * @param {m_proto.SC_VerifyAccount} message SC_VerifyAccount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_VerifyAccount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err_code = 0;
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            return object;
        };

        /**
         * Converts this SC_VerifyAccount to JSON.
         * @function toJSON
         * @memberof m_proto.SC_VerifyAccount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_VerifyAccount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_VerifyAccount
         * @function getTypeUrl
         * @memberof m_proto.SC_VerifyAccount
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_VerifyAccount.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_VerifyAccount";
        };

        return SC_VerifyAccount;
    })();

    m_proto.CS_IsHasRole = (function() {

        /**
         * Properties of a CS_IsHasRole.
         * @memberof m_proto
         * @interface ICS_IsHasRole
         * @property {string|null} [account] CS_IsHasRole account
         * @property {number|null} [server_id] CS_IsHasRole server_id
         */

        /**
         * Constructs a new CS_IsHasRole.
         * @memberof m_proto
         * @classdesc Represents a CS_IsHasRole.
         * @implements ICS_IsHasRole
         * @constructor
         * @param {m_proto.ICS_IsHasRole=} [properties] Properties to set
         */
        function CS_IsHasRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_IsHasRole account.
         * @member {string} account
         * @memberof m_proto.CS_IsHasRole
         * @instance
         */
        CS_IsHasRole.prototype.account = "";

        /**
         * CS_IsHasRole server_id.
         * @member {number} server_id
         * @memberof m_proto.CS_IsHasRole
         * @instance
         */
        CS_IsHasRole.prototype.server_id = 0;

        /**
         * Creates a new CS_IsHasRole instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_IsHasRole
         * @static
         * @param {m_proto.ICS_IsHasRole=} [properties] Properties to set
         * @returns {m_proto.CS_IsHasRole} CS_IsHasRole instance
         */
        CS_IsHasRole.create = function create(properties) {
            return new CS_IsHasRole(properties);
        };

        /**
         * Encodes the specified CS_IsHasRole message. Does not implicitly {@link m_proto.CS_IsHasRole.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_IsHasRole
         * @static
         * @param {m_proto.ICS_IsHasRole} message CS_IsHasRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_IsHasRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.server_id != null && Object.hasOwnProperty.call(message, "server_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.server_id);
            return writer;
        };

        /**
         * Encodes the specified CS_IsHasRole message, length delimited. Does not implicitly {@link m_proto.CS_IsHasRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_IsHasRole
         * @static
         * @param {m_proto.ICS_IsHasRole} message CS_IsHasRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_IsHasRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_IsHasRole message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_IsHasRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_IsHasRole} CS_IsHasRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_IsHasRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_IsHasRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.account = reader.string();
                        break;
                    }
                case 2: {
                        message.server_id = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_IsHasRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_IsHasRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_IsHasRole} CS_IsHasRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_IsHasRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_IsHasRole message.
         * @function verify
         * @memberof m_proto.CS_IsHasRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_IsHasRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.server_id != null && message.hasOwnProperty("server_id"))
                if (!$util.isInteger(message.server_id))
                    return "server_id: integer expected";
            return null;
        };

        /**
         * Creates a CS_IsHasRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_IsHasRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_IsHasRole} CS_IsHasRole
         */
        CS_IsHasRole.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_IsHasRole)
                return object;
            var message = new $root.m_proto.CS_IsHasRole();
            if (object.account != null)
                message.account = String(object.account);
            if (object.server_id != null)
                message.server_id = object.server_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CS_IsHasRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_IsHasRole
         * @static
         * @param {m_proto.CS_IsHasRole} message CS_IsHasRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_IsHasRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.server_id = 0;
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.server_id != null && message.hasOwnProperty("server_id"))
                object.server_id = message.server_id;
            return object;
        };

        /**
         * Converts this CS_IsHasRole to JSON.
         * @function toJSON
         * @memberof m_proto.CS_IsHasRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_IsHasRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_IsHasRole
         * @function getTypeUrl
         * @memberof m_proto.CS_IsHasRole
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_IsHasRole.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_IsHasRole";
        };

        return CS_IsHasRole;
    })();

    m_proto.SC_IsHasRole = (function() {

        /**
         * Properties of a SC_IsHasRole.
         * @memberof m_proto
         * @interface ISC_IsHasRole
         * @property {number|null} [err_code] SC_IsHasRole err_code
         * @property {boolean|null} [is_created] SC_IsHasRole is_created
         */

        /**
         * Constructs a new SC_IsHasRole.
         * @memberof m_proto
         * @classdesc Represents a SC_IsHasRole.
         * @implements ISC_IsHasRole
         * @constructor
         * @param {m_proto.ISC_IsHasRole=} [properties] Properties to set
         */
        function SC_IsHasRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_IsHasRole err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_IsHasRole
         * @instance
         */
        SC_IsHasRole.prototype.err_code = 0;

        /**
         * SC_IsHasRole is_created.
         * @member {boolean} is_created
         * @memberof m_proto.SC_IsHasRole
         * @instance
         */
        SC_IsHasRole.prototype.is_created = false;

        /**
         * Creates a new SC_IsHasRole instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_IsHasRole
         * @static
         * @param {m_proto.ISC_IsHasRole=} [properties] Properties to set
         * @returns {m_proto.SC_IsHasRole} SC_IsHasRole instance
         */
        SC_IsHasRole.create = function create(properties) {
            return new SC_IsHasRole(properties);
        };

        /**
         * Encodes the specified SC_IsHasRole message. Does not implicitly {@link m_proto.SC_IsHasRole.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_IsHasRole
         * @static
         * @param {m_proto.ISC_IsHasRole} message SC_IsHasRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_IsHasRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            if (message.is_created != null && Object.hasOwnProperty.call(message, "is_created"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_created);
            return writer;
        };

        /**
         * Encodes the specified SC_IsHasRole message, length delimited. Does not implicitly {@link m_proto.SC_IsHasRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_IsHasRole
         * @static
         * @param {m_proto.ISC_IsHasRole} message SC_IsHasRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_IsHasRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_IsHasRole message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_IsHasRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_IsHasRole} SC_IsHasRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_IsHasRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_IsHasRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.is_created = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_IsHasRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_IsHasRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_IsHasRole} SC_IsHasRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_IsHasRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_IsHasRole message.
         * @function verify
         * @memberof m_proto.SC_IsHasRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_IsHasRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            if (message.is_created != null && message.hasOwnProperty("is_created"))
                if (typeof message.is_created !== "boolean")
                    return "is_created: boolean expected";
            return null;
        };

        /**
         * Creates a SC_IsHasRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_IsHasRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_IsHasRole} SC_IsHasRole
         */
        SC_IsHasRole.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_IsHasRole)
                return object;
            var message = new $root.m_proto.SC_IsHasRole();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            if (object.is_created != null)
                message.is_created = Boolean(object.is_created);
            return message;
        };

        /**
         * Creates a plain object from a SC_IsHasRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_IsHasRole
         * @static
         * @param {m_proto.SC_IsHasRole} message SC_IsHasRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_IsHasRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err_code = 0;
                object.is_created = false;
            }
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            if (message.is_created != null && message.hasOwnProperty("is_created"))
                object.is_created = message.is_created;
            return object;
        };

        /**
         * Converts this SC_IsHasRole to JSON.
         * @function toJSON
         * @memberof m_proto.SC_IsHasRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_IsHasRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_IsHasRole
         * @function getTypeUrl
         * @memberof m_proto.SC_IsHasRole
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_IsHasRole.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_IsHasRole";
        };

        return SC_IsHasRole;
    })();

    m_proto.CS_CreateRole = (function() {

        /**
         * Properties of a CS_CreateRole.
         * @memberof m_proto
         * @interface ICS_CreateRole
         * @property {string|null} [roleName] CS_CreateRole roleName
         * @property {string|null} [site] CS_CreateRole site
         * @property {number|null} [career] CS_CreateRole career
         */

        /**
         * Constructs a new CS_CreateRole.
         * @memberof m_proto
         * @classdesc Represents a CS_CreateRole.
         * @implements ICS_CreateRole
         * @constructor
         * @param {m_proto.ICS_CreateRole=} [properties] Properties to set
         */
        function CS_CreateRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_CreateRole roleName.
         * @member {string} roleName
         * @memberof m_proto.CS_CreateRole
         * @instance
         */
        CS_CreateRole.prototype.roleName = "";

        /**
         * CS_CreateRole site.
         * @member {string} site
         * @memberof m_proto.CS_CreateRole
         * @instance
         */
        CS_CreateRole.prototype.site = "";

        /**
         * CS_CreateRole career.
         * @member {number} career
         * @memberof m_proto.CS_CreateRole
         * @instance
         */
        CS_CreateRole.prototype.career = 0;

        /**
         * Creates a new CS_CreateRole instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_CreateRole
         * @static
         * @param {m_proto.ICS_CreateRole=} [properties] Properties to set
         * @returns {m_proto.CS_CreateRole} CS_CreateRole instance
         */
        CS_CreateRole.create = function create(properties) {
            return new CS_CreateRole(properties);
        };

        /**
         * Encodes the specified CS_CreateRole message. Does not implicitly {@link m_proto.CS_CreateRole.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_CreateRole
         * @static
         * @param {m_proto.ICS_CreateRole} message CS_CreateRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_CreateRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleName != null && Object.hasOwnProperty.call(message, "roleName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roleName);
            if (message.site != null && Object.hasOwnProperty.call(message, "site"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.site);
            if (message.career != null && Object.hasOwnProperty.call(message, "career"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.career);
            return writer;
        };

        /**
         * Encodes the specified CS_CreateRole message, length delimited. Does not implicitly {@link m_proto.CS_CreateRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_CreateRole
         * @static
         * @param {m_proto.ICS_CreateRole} message CS_CreateRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_CreateRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_CreateRole message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_CreateRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_CreateRole} CS_CreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_CreateRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_CreateRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roleName = reader.string();
                        break;
                    }
                case 3: {
                        message.site = reader.string();
                        break;
                    }
                case 4: {
                        message.career = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_CreateRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_CreateRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_CreateRole} CS_CreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_CreateRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_CreateRole message.
         * @function verify
         * @memberof m_proto.CS_CreateRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_CreateRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleName != null && message.hasOwnProperty("roleName"))
                if (!$util.isString(message.roleName))
                    return "roleName: string expected";
            if (message.site != null && message.hasOwnProperty("site"))
                if (!$util.isString(message.site))
                    return "site: string expected";
            if (message.career != null && message.hasOwnProperty("career"))
                if (!$util.isInteger(message.career))
                    return "career: integer expected";
            return null;
        };

        /**
         * Creates a CS_CreateRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_CreateRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_CreateRole} CS_CreateRole
         */
        CS_CreateRole.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_CreateRole)
                return object;
            var message = new $root.m_proto.CS_CreateRole();
            if (object.roleName != null)
                message.roleName = String(object.roleName);
            if (object.site != null)
                message.site = String(object.site);
            if (object.career != null)
                message.career = object.career >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CS_CreateRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_CreateRole
         * @static
         * @param {m_proto.CS_CreateRole} message CS_CreateRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_CreateRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roleName = "";
                object.site = "";
                object.career = 0;
            }
            if (message.roleName != null && message.hasOwnProperty("roleName"))
                object.roleName = message.roleName;
            if (message.site != null && message.hasOwnProperty("site"))
                object.site = message.site;
            if (message.career != null && message.hasOwnProperty("career"))
                object.career = message.career;
            return object;
        };

        /**
         * Converts this CS_CreateRole to JSON.
         * @function toJSON
         * @memberof m_proto.CS_CreateRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_CreateRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_CreateRole
         * @function getTypeUrl
         * @memberof m_proto.CS_CreateRole
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_CreateRole.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_CreateRole";
        };

        return CS_CreateRole;
    })();

    m_proto.SC_CreateRole = (function() {

        /**
         * Properties of a SC_CreateRole.
         * @memberof m_proto
         * @interface ISC_CreateRole
         * @property {number|null} [err_code] SC_CreateRole err_code
         * @property {number|Long|null} [role_id] SC_CreateRole role_id
         * @property {string|null} [roleName] SC_CreateRole roleName
         */

        /**
         * Constructs a new SC_CreateRole.
         * @memberof m_proto
         * @classdesc Represents a SC_CreateRole.
         * @implements ISC_CreateRole
         * @constructor
         * @param {m_proto.ISC_CreateRole=} [properties] Properties to set
         */
        function SC_CreateRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_CreateRole err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_CreateRole
         * @instance
         */
        SC_CreateRole.prototype.err_code = 0;

        /**
         * SC_CreateRole role_id.
         * @member {number|Long} role_id
         * @memberof m_proto.SC_CreateRole
         * @instance
         */
        SC_CreateRole.prototype.role_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SC_CreateRole roleName.
         * @member {string} roleName
         * @memberof m_proto.SC_CreateRole
         * @instance
         */
        SC_CreateRole.prototype.roleName = "";

        /**
         * Creates a new SC_CreateRole instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_CreateRole
         * @static
         * @param {m_proto.ISC_CreateRole=} [properties] Properties to set
         * @returns {m_proto.SC_CreateRole} SC_CreateRole instance
         */
        SC_CreateRole.create = function create(properties) {
            return new SC_CreateRole(properties);
        };

        /**
         * Encodes the specified SC_CreateRole message. Does not implicitly {@link m_proto.SC_CreateRole.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_CreateRole
         * @static
         * @param {m_proto.ISC_CreateRole} message SC_CreateRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_CreateRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            if (message.role_id != null && Object.hasOwnProperty.call(message, "role_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.role_id);
            if (message.roleName != null && Object.hasOwnProperty.call(message, "roleName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roleName);
            return writer;
        };

        /**
         * Encodes the specified SC_CreateRole message, length delimited. Does not implicitly {@link m_proto.SC_CreateRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_CreateRole
         * @static
         * @param {m_proto.ISC_CreateRole} message SC_CreateRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_CreateRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_CreateRole message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_CreateRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_CreateRole} SC_CreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_CreateRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_CreateRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.role_id = reader.uint64();
                        break;
                    }
                case 3: {
                        message.roleName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_CreateRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_CreateRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_CreateRole} SC_CreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_CreateRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_CreateRole message.
         * @function verify
         * @memberof m_proto.SC_CreateRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_CreateRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                if (!$util.isInteger(message.role_id) && !(message.role_id && $util.isInteger(message.role_id.low) && $util.isInteger(message.role_id.high)))
                    return "role_id: integer|Long expected";
            if (message.roleName != null && message.hasOwnProperty("roleName"))
                if (!$util.isString(message.roleName))
                    return "roleName: string expected";
            return null;
        };

        /**
         * Creates a SC_CreateRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_CreateRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_CreateRole} SC_CreateRole
         */
        SC_CreateRole.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_CreateRole)
                return object;
            var message = new $root.m_proto.SC_CreateRole();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            if (object.role_id != null)
                if ($util.Long)
                    (message.role_id = $util.Long.fromValue(object.role_id)).unsigned = true;
                else if (typeof object.role_id === "string")
                    message.role_id = parseInt(object.role_id, 10);
                else if (typeof object.role_id === "number")
                    message.role_id = object.role_id;
                else if (typeof object.role_id === "object")
                    message.role_id = new $util.LongBits(object.role_id.low >>> 0, object.role_id.high >>> 0).toNumber(true);
            if (object.roleName != null)
                message.roleName = String(object.roleName);
            return message;
        };

        /**
         * Creates a plain object from a SC_CreateRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_CreateRole
         * @static
         * @param {m_proto.SC_CreateRole} message SC_CreateRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_CreateRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err_code = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.role_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.role_id = options.longs === String ? "0" : 0;
                object.roleName = "";
            }
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                if (typeof message.role_id === "number")
                    object.role_id = options.longs === String ? String(message.role_id) : message.role_id;
                else
                    object.role_id = options.longs === String ? $util.Long.prototype.toString.call(message.role_id) : options.longs === Number ? new $util.LongBits(message.role_id.low >>> 0, message.role_id.high >>> 0).toNumber(true) : message.role_id;
            if (message.roleName != null && message.hasOwnProperty("roleName"))
                object.roleName = message.roleName;
            return object;
        };

        /**
         * Converts this SC_CreateRole to JSON.
         * @function toJSON
         * @memberof m_proto.SC_CreateRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_CreateRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_CreateRole
         * @function getTypeUrl
         * @memberof m_proto.SC_CreateRole
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_CreateRole.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_CreateRole";
        };

        return SC_CreateRole;
    })();

    m_proto.CS_EnterGame = (function() {

        /**
         * Properties of a CS_EnterGame.
         * @memberof m_proto
         * @interface ICS_EnterGame
         * @property {string|null} [site] CS_EnterGame site
         */

        /**
         * Constructs a new CS_EnterGame.
         * @memberof m_proto
         * @classdesc Represents a CS_EnterGame.
         * @implements ICS_EnterGame
         * @constructor
         * @param {m_proto.ICS_EnterGame=} [properties] Properties to set
         */
        function CS_EnterGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_EnterGame site.
         * @member {string} site
         * @memberof m_proto.CS_EnterGame
         * @instance
         */
        CS_EnterGame.prototype.site = "";

        /**
         * Creates a new CS_EnterGame instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_EnterGame
         * @static
         * @param {m_proto.ICS_EnterGame=} [properties] Properties to set
         * @returns {m_proto.CS_EnterGame} CS_EnterGame instance
         */
        CS_EnterGame.create = function create(properties) {
            return new CS_EnterGame(properties);
        };

        /**
         * Encodes the specified CS_EnterGame message. Does not implicitly {@link m_proto.CS_EnterGame.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_EnterGame
         * @static
         * @param {m_proto.ICS_EnterGame} message CS_EnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_EnterGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.site != null && Object.hasOwnProperty.call(message, "site"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.site);
            return writer;
        };

        /**
         * Encodes the specified CS_EnterGame message, length delimited. Does not implicitly {@link m_proto.CS_EnterGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_EnterGame
         * @static
         * @param {m_proto.ICS_EnterGame} message CS_EnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_EnterGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_EnterGame message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_EnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_EnterGame} CS_EnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_EnterGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_EnterGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.site = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_EnterGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_EnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_EnterGame} CS_EnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_EnterGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_EnterGame message.
         * @function verify
         * @memberof m_proto.CS_EnterGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_EnterGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.site != null && message.hasOwnProperty("site"))
                if (!$util.isString(message.site))
                    return "site: string expected";
            return null;
        };

        /**
         * Creates a CS_EnterGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_EnterGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_EnterGame} CS_EnterGame
         */
        CS_EnterGame.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_EnterGame)
                return object;
            var message = new $root.m_proto.CS_EnterGame();
            if (object.site != null)
                message.site = String(object.site);
            return message;
        };

        /**
         * Creates a plain object from a CS_EnterGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_EnterGame
         * @static
         * @param {m_proto.CS_EnterGame} message CS_EnterGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_EnterGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.site = "";
            if (message.site != null && message.hasOwnProperty("site"))
                object.site = message.site;
            return object;
        };

        /**
         * Converts this CS_EnterGame to JSON.
         * @function toJSON
         * @memberof m_proto.CS_EnterGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_EnterGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_EnterGame
         * @function getTypeUrl
         * @memberof m_proto.CS_EnterGame
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_EnterGame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_EnterGame";
        };

        return CS_EnterGame;
    })();

    m_proto.SC_EnterGame = (function() {

        /**
         * Properties of a SC_EnterGame.
         * @memberof m_proto
         * @interface ISC_EnterGame
         * @property {number|null} [err_code] SC_EnterGame err_code
         * @property {number|null} [server_time] SC_EnterGame server_time
         * @property {number|Long|null} [token] SC_EnterGame token
         * @property {number|null} [create_time] SC_EnterGame create_time
         * @property {number|null} [open_time] SC_EnterGame open_time
         */

        /**
         * Constructs a new SC_EnterGame.
         * @memberof m_proto
         * @classdesc Represents a SC_EnterGame.
         * @implements ISC_EnterGame
         * @constructor
         * @param {m_proto.ISC_EnterGame=} [properties] Properties to set
         */
        function SC_EnterGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_EnterGame err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_EnterGame
         * @instance
         */
        SC_EnterGame.prototype.err_code = 0;

        /**
         * SC_EnterGame server_time.
         * @member {number} server_time
         * @memberof m_proto.SC_EnterGame
         * @instance
         */
        SC_EnterGame.prototype.server_time = 0;

        /**
         * SC_EnterGame token.
         * @member {number|Long} token
         * @memberof m_proto.SC_EnterGame
         * @instance
         */
        SC_EnterGame.prototype.token = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SC_EnterGame create_time.
         * @member {number} create_time
         * @memberof m_proto.SC_EnterGame
         * @instance
         */
        SC_EnterGame.prototype.create_time = 0;

        /**
         * SC_EnterGame open_time.
         * @member {number} open_time
         * @memberof m_proto.SC_EnterGame
         * @instance
         */
        SC_EnterGame.prototype.open_time = 0;

        /**
         * Creates a new SC_EnterGame instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_EnterGame
         * @static
         * @param {m_proto.ISC_EnterGame=} [properties] Properties to set
         * @returns {m_proto.SC_EnterGame} SC_EnterGame instance
         */
        SC_EnterGame.create = function create(properties) {
            return new SC_EnterGame(properties);
        };

        /**
         * Encodes the specified SC_EnterGame message. Does not implicitly {@link m_proto.SC_EnterGame.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_EnterGame
         * @static
         * @param {m_proto.ISC_EnterGame} message SC_EnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_EnterGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            if (message.server_time != null && Object.hasOwnProperty.call(message, "server_time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.server_time);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.token);
            if (message.create_time != null && Object.hasOwnProperty.call(message, "create_time"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.create_time);
            if (message.open_time != null && Object.hasOwnProperty.call(message, "open_time"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.open_time);
            return writer;
        };

        /**
         * Encodes the specified SC_EnterGame message, length delimited. Does not implicitly {@link m_proto.SC_EnterGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_EnterGame
         * @static
         * @param {m_proto.ISC_EnterGame} message SC_EnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_EnterGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_EnterGame message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_EnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_EnterGame} SC_EnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_EnterGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_EnterGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.server_time = reader.uint32();
                        break;
                    }
                case 3: {
                        message.token = reader.uint64();
                        break;
                    }
                case 4: {
                        message.create_time = reader.uint32();
                        break;
                    }
                case 5: {
                        message.open_time = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_EnterGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_EnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_EnterGame} SC_EnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_EnterGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_EnterGame message.
         * @function verify
         * @memberof m_proto.SC_EnterGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_EnterGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            if (message.server_time != null && message.hasOwnProperty("server_time"))
                if (!$util.isInteger(message.server_time))
                    return "server_time: integer expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isInteger(message.token) && !(message.token && $util.isInteger(message.token.low) && $util.isInteger(message.token.high)))
                    return "token: integer|Long expected";
            if (message.create_time != null && message.hasOwnProperty("create_time"))
                if (!$util.isInteger(message.create_time))
                    return "create_time: integer expected";
            if (message.open_time != null && message.hasOwnProperty("open_time"))
                if (!$util.isInteger(message.open_time))
                    return "open_time: integer expected";
            return null;
        };

        /**
         * Creates a SC_EnterGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_EnterGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_EnterGame} SC_EnterGame
         */
        SC_EnterGame.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_EnterGame)
                return object;
            var message = new $root.m_proto.SC_EnterGame();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            if (object.server_time != null)
                message.server_time = object.server_time >>> 0;
            if (object.token != null)
                if ($util.Long)
                    (message.token = $util.Long.fromValue(object.token)).unsigned = true;
                else if (typeof object.token === "string")
                    message.token = parseInt(object.token, 10);
                else if (typeof object.token === "number")
                    message.token = object.token;
                else if (typeof object.token === "object")
                    message.token = new $util.LongBits(object.token.low >>> 0, object.token.high >>> 0).toNumber(true);
            if (object.create_time != null)
                message.create_time = object.create_time >>> 0;
            if (object.open_time != null)
                message.open_time = object.open_time >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_EnterGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_EnterGame
         * @static
         * @param {m_proto.SC_EnterGame} message SC_EnterGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_EnterGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err_code = 0;
                object.server_time = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.token = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.token = options.longs === String ? "0" : 0;
                object.create_time = 0;
                object.open_time = 0;
            }
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            if (message.server_time != null && message.hasOwnProperty("server_time"))
                object.server_time = message.server_time;
            if (message.token != null && message.hasOwnProperty("token"))
                if (typeof message.token === "number")
                    object.token = options.longs === String ? String(message.token) : message.token;
                else
                    object.token = options.longs === String ? $util.Long.prototype.toString.call(message.token) : options.longs === Number ? new $util.LongBits(message.token.low >>> 0, message.token.high >>> 0).toNumber(true) : message.token;
            if (message.create_time != null && message.hasOwnProperty("create_time"))
                object.create_time = message.create_time;
            if (message.open_time != null && message.hasOwnProperty("open_time"))
                object.open_time = message.open_time;
            return object;
        };

        /**
         * Converts this SC_EnterGame to JSON.
         * @function toJSON
         * @memberof m_proto.SC_EnterGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_EnterGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_EnterGame
         * @function getTypeUrl
         * @memberof m_proto.SC_EnterGame
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_EnterGame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_EnterGame";
        };

        return SC_EnterGame;
    })();

    m_proto.CS_Reconnect = (function() {

        /**
         * Properties of a CS_Reconnect.
         * @memberof m_proto
         * @interface ICS_Reconnect
         * @property {number|Long|null} [token] CS_Reconnect token
         */

        /**
         * Constructs a new CS_Reconnect.
         * @memberof m_proto
         * @classdesc Represents a CS_Reconnect.
         * @implements ICS_Reconnect
         * @constructor
         * @param {m_proto.ICS_Reconnect=} [properties] Properties to set
         */
        function CS_Reconnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_Reconnect token.
         * @member {number|Long} token
         * @memberof m_proto.CS_Reconnect
         * @instance
         */
        CS_Reconnect.prototype.token = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new CS_Reconnect instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_Reconnect
         * @static
         * @param {m_proto.ICS_Reconnect=} [properties] Properties to set
         * @returns {m_proto.CS_Reconnect} CS_Reconnect instance
         */
        CS_Reconnect.create = function create(properties) {
            return new CS_Reconnect(properties);
        };

        /**
         * Encodes the specified CS_Reconnect message. Does not implicitly {@link m_proto.CS_Reconnect.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_Reconnect
         * @static
         * @param {m_proto.ICS_Reconnect} message CS_Reconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_Reconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.token);
            return writer;
        };

        /**
         * Encodes the specified CS_Reconnect message, length delimited. Does not implicitly {@link m_proto.CS_Reconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_Reconnect
         * @static
         * @param {m_proto.ICS_Reconnect} message CS_Reconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_Reconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_Reconnect message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_Reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_Reconnect} CS_Reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_Reconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_Reconnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.token = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_Reconnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_Reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_Reconnect} CS_Reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_Reconnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_Reconnect message.
         * @function verify
         * @memberof m_proto.CS_Reconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_Reconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isInteger(message.token) && !(message.token && $util.isInteger(message.token.low) && $util.isInteger(message.token.high)))
                    return "token: integer|Long expected";
            return null;
        };

        /**
         * Creates a CS_Reconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_Reconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_Reconnect} CS_Reconnect
         */
        CS_Reconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_Reconnect)
                return object;
            var message = new $root.m_proto.CS_Reconnect();
            if (object.token != null)
                if ($util.Long)
                    (message.token = $util.Long.fromValue(object.token)).unsigned = true;
                else if (typeof object.token === "string")
                    message.token = parseInt(object.token, 10);
                else if (typeof object.token === "number")
                    message.token = object.token;
                else if (typeof object.token === "object")
                    message.token = new $util.LongBits(object.token.low >>> 0, object.token.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a CS_Reconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_Reconnect
         * @static
         * @param {m_proto.CS_Reconnect} message CS_Reconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_Reconnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.token = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.token = options.longs === String ? "0" : 0;
            if (message.token != null && message.hasOwnProperty("token"))
                if (typeof message.token === "number")
                    object.token = options.longs === String ? String(message.token) : message.token;
                else
                    object.token = options.longs === String ? $util.Long.prototype.toString.call(message.token) : options.longs === Number ? new $util.LongBits(message.token.low >>> 0, message.token.high >>> 0).toNumber(true) : message.token;
            return object;
        };

        /**
         * Converts this CS_Reconnect to JSON.
         * @function toJSON
         * @memberof m_proto.CS_Reconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_Reconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_Reconnect
         * @function getTypeUrl
         * @memberof m_proto.CS_Reconnect
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_Reconnect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_Reconnect";
        };

        return CS_Reconnect;
    })();

    m_proto.SC_Reconnect = (function() {

        /**
         * Properties of a SC_Reconnect.
         * @memberof m_proto
         * @interface ISC_Reconnect
         * @property {number|null} [err_code] SC_Reconnect err_code
         */

        /**
         * Constructs a new SC_Reconnect.
         * @memberof m_proto
         * @classdesc Represents a SC_Reconnect.
         * @implements ISC_Reconnect
         * @constructor
         * @param {m_proto.ISC_Reconnect=} [properties] Properties to set
         */
        function SC_Reconnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_Reconnect err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_Reconnect
         * @instance
         */
        SC_Reconnect.prototype.err_code = 0;

        /**
         * Creates a new SC_Reconnect instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_Reconnect
         * @static
         * @param {m_proto.ISC_Reconnect=} [properties] Properties to set
         * @returns {m_proto.SC_Reconnect} SC_Reconnect instance
         */
        SC_Reconnect.create = function create(properties) {
            return new SC_Reconnect(properties);
        };

        /**
         * Encodes the specified SC_Reconnect message. Does not implicitly {@link m_proto.SC_Reconnect.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_Reconnect
         * @static
         * @param {m_proto.ISC_Reconnect} message SC_Reconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_Reconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            return writer;
        };

        /**
         * Encodes the specified SC_Reconnect message, length delimited. Does not implicitly {@link m_proto.SC_Reconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_Reconnect
         * @static
         * @param {m_proto.ISC_Reconnect} message SC_Reconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_Reconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_Reconnect message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_Reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_Reconnect} SC_Reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_Reconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_Reconnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_Reconnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_Reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_Reconnect} SC_Reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_Reconnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_Reconnect message.
         * @function verify
         * @memberof m_proto.SC_Reconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_Reconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            return null;
        };

        /**
         * Creates a SC_Reconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_Reconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_Reconnect} SC_Reconnect
         */
        SC_Reconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_Reconnect)
                return object;
            var message = new $root.m_proto.SC_Reconnect();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_Reconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_Reconnect
         * @static
         * @param {m_proto.SC_Reconnect} message SC_Reconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_Reconnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err_code = 0;
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            return object;
        };

        /**
         * Converts this SC_Reconnect to JSON.
         * @function toJSON
         * @memberof m_proto.SC_Reconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_Reconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_Reconnect
         * @function getTypeUrl
         * @memberof m_proto.SC_Reconnect
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_Reconnect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_Reconnect";
        };

        return SC_Reconnect;
    })();

    m_proto.CS_Ping = (function() {

        /**
         * Properties of a CS_Ping.
         * @memberof m_proto
         * @interface ICS_Ping
         */

        /**
         * Constructs a new CS_Ping.
         * @memberof m_proto
         * @classdesc Represents a CS_Ping.
         * @implements ICS_Ping
         * @constructor
         * @param {m_proto.ICS_Ping=} [properties] Properties to set
         */
        function CS_Ping(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CS_Ping instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_Ping
         * @static
         * @param {m_proto.ICS_Ping=} [properties] Properties to set
         * @returns {m_proto.CS_Ping} CS_Ping instance
         */
        CS_Ping.create = function create(properties) {
            return new CS_Ping(properties);
        };

        /**
         * Encodes the specified CS_Ping message. Does not implicitly {@link m_proto.CS_Ping.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_Ping
         * @static
         * @param {m_proto.ICS_Ping} message CS_Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_Ping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CS_Ping message, length delimited. Does not implicitly {@link m_proto.CS_Ping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_Ping
         * @static
         * @param {m_proto.ICS_Ping} message CS_Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_Ping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_Ping message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_Ping} CS_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_Ping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_Ping();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_Ping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_Ping} CS_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_Ping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_Ping message.
         * @function verify
         * @memberof m_proto.CS_Ping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_Ping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CS_Ping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_Ping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_Ping} CS_Ping
         */
        CS_Ping.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_Ping)
                return object;
            return new $root.m_proto.CS_Ping();
        };

        /**
         * Creates a plain object from a CS_Ping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_Ping
         * @static
         * @param {m_proto.CS_Ping} message CS_Ping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_Ping.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CS_Ping to JSON.
         * @function toJSON
         * @memberof m_proto.CS_Ping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_Ping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_Ping
         * @function getTypeUrl
         * @memberof m_proto.CS_Ping
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_Ping.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_Ping";
        };

        return CS_Ping;
    })();

    m_proto.SC_Ping = (function() {

        /**
         * Properties of a SC_Ping.
         * @memberof m_proto
         * @interface ISC_Ping
         * @property {number|null} [ctime] SC_Ping ctime
         */

        /**
         * Constructs a new SC_Ping.
         * @memberof m_proto
         * @classdesc Represents a SC_Ping.
         * @implements ISC_Ping
         * @constructor
         * @param {m_proto.ISC_Ping=} [properties] Properties to set
         */
        function SC_Ping(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_Ping ctime.
         * @member {number} ctime
         * @memberof m_proto.SC_Ping
         * @instance
         */
        SC_Ping.prototype.ctime = 0;

        /**
         * Creates a new SC_Ping instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_Ping
         * @static
         * @param {m_proto.ISC_Ping=} [properties] Properties to set
         * @returns {m_proto.SC_Ping} SC_Ping instance
         */
        SC_Ping.create = function create(properties) {
            return new SC_Ping(properties);
        };

        /**
         * Encodes the specified SC_Ping message. Does not implicitly {@link m_proto.SC_Ping.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_Ping
         * @static
         * @param {m_proto.ISC_Ping} message SC_Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_Ping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ctime != null && Object.hasOwnProperty.call(message, "ctime"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ctime);
            return writer;
        };

        /**
         * Encodes the specified SC_Ping message, length delimited. Does not implicitly {@link m_proto.SC_Ping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_Ping
         * @static
         * @param {m_proto.ISC_Ping} message SC_Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_Ping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_Ping message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_Ping} SC_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_Ping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_Ping();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ctime = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_Ping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_Ping} SC_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_Ping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_Ping message.
         * @function verify
         * @memberof m_proto.SC_Ping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_Ping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ctime != null && message.hasOwnProperty("ctime"))
                if (!$util.isInteger(message.ctime))
                    return "ctime: integer expected";
            return null;
        };

        /**
         * Creates a SC_Ping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_Ping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_Ping} SC_Ping
         */
        SC_Ping.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_Ping)
                return object;
            var message = new $root.m_proto.SC_Ping();
            if (object.ctime != null)
                message.ctime = object.ctime >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_Ping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_Ping
         * @static
         * @param {m_proto.SC_Ping} message SC_Ping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_Ping.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ctime = 0;
            if (message.ctime != null && message.hasOwnProperty("ctime"))
                object.ctime = message.ctime;
            return object;
        };

        /**
         * Converts this SC_Ping to JSON.
         * @function toJSON
         * @memberof m_proto.SC_Ping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_Ping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_Ping
         * @function getTypeUrl
         * @memberof m_proto.SC_Ping
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_Ping.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_Ping";
        };

        return SC_Ping;
    })();

    m_proto.CS_CheckRoleName = (function() {

        /**
         * Properties of a CS_CheckRoleName.
         * @memberof m_proto
         * @interface ICS_CheckRoleName
         * @property {string|null} [role_name] CS_CheckRoleName role_name
         */

        /**
         * Constructs a new CS_CheckRoleName.
         * @memberof m_proto
         * @classdesc Represents a CS_CheckRoleName.
         * @implements ICS_CheckRoleName
         * @constructor
         * @param {m_proto.ICS_CheckRoleName=} [properties] Properties to set
         */
        function CS_CheckRoleName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_CheckRoleName role_name.
         * @member {string} role_name
         * @memberof m_proto.CS_CheckRoleName
         * @instance
         */
        CS_CheckRoleName.prototype.role_name = "";

        /**
         * Creates a new CS_CheckRoleName instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_CheckRoleName
         * @static
         * @param {m_proto.ICS_CheckRoleName=} [properties] Properties to set
         * @returns {m_proto.CS_CheckRoleName} CS_CheckRoleName instance
         */
        CS_CheckRoleName.create = function create(properties) {
            return new CS_CheckRoleName(properties);
        };

        /**
         * Encodes the specified CS_CheckRoleName message. Does not implicitly {@link m_proto.CS_CheckRoleName.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_CheckRoleName
         * @static
         * @param {m_proto.ICS_CheckRoleName} message CS_CheckRoleName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_CheckRoleName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.role_name != null && Object.hasOwnProperty.call(message, "role_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.role_name);
            return writer;
        };

        /**
         * Encodes the specified CS_CheckRoleName message, length delimited. Does not implicitly {@link m_proto.CS_CheckRoleName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_CheckRoleName
         * @static
         * @param {m_proto.ICS_CheckRoleName} message CS_CheckRoleName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_CheckRoleName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_CheckRoleName message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_CheckRoleName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_CheckRoleName} CS_CheckRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_CheckRoleName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_CheckRoleName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.role_name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_CheckRoleName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_CheckRoleName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_CheckRoleName} CS_CheckRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_CheckRoleName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_CheckRoleName message.
         * @function verify
         * @memberof m_proto.CS_CheckRoleName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_CheckRoleName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                if (!$util.isString(message.role_name))
                    return "role_name: string expected";
            return null;
        };

        /**
         * Creates a CS_CheckRoleName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_CheckRoleName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_CheckRoleName} CS_CheckRoleName
         */
        CS_CheckRoleName.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_CheckRoleName)
                return object;
            var message = new $root.m_proto.CS_CheckRoleName();
            if (object.role_name != null)
                message.role_name = String(object.role_name);
            return message;
        };

        /**
         * Creates a plain object from a CS_CheckRoleName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_CheckRoleName
         * @static
         * @param {m_proto.CS_CheckRoleName} message CS_CheckRoleName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_CheckRoleName.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.role_name = "";
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                object.role_name = message.role_name;
            return object;
        };

        /**
         * Converts this CS_CheckRoleName to JSON.
         * @function toJSON
         * @memberof m_proto.CS_CheckRoleName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_CheckRoleName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_CheckRoleName
         * @function getTypeUrl
         * @memberof m_proto.CS_CheckRoleName
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_CheckRoleName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_CheckRoleName";
        };

        return CS_CheckRoleName;
    })();

    m_proto.SC_CheckRoleName = (function() {

        /**
         * Properties of a SC_CheckRoleName.
         * @memberof m_proto
         * @interface ISC_CheckRoleName
         * @property {boolean|null} [has_exist] SC_CheckRoleName has_exist
         */

        /**
         * Constructs a new SC_CheckRoleName.
         * @memberof m_proto
         * @classdesc Represents a SC_CheckRoleName.
         * @implements ISC_CheckRoleName
         * @constructor
         * @param {m_proto.ISC_CheckRoleName=} [properties] Properties to set
         */
        function SC_CheckRoleName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_CheckRoleName has_exist.
         * @member {boolean} has_exist
         * @memberof m_proto.SC_CheckRoleName
         * @instance
         */
        SC_CheckRoleName.prototype.has_exist = false;

        /**
         * Creates a new SC_CheckRoleName instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_CheckRoleName
         * @static
         * @param {m_proto.ISC_CheckRoleName=} [properties] Properties to set
         * @returns {m_proto.SC_CheckRoleName} SC_CheckRoleName instance
         */
        SC_CheckRoleName.create = function create(properties) {
            return new SC_CheckRoleName(properties);
        };

        /**
         * Encodes the specified SC_CheckRoleName message. Does not implicitly {@link m_proto.SC_CheckRoleName.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_CheckRoleName
         * @static
         * @param {m_proto.ISC_CheckRoleName} message SC_CheckRoleName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_CheckRoleName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.has_exist != null && Object.hasOwnProperty.call(message, "has_exist"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.has_exist);
            return writer;
        };

        /**
         * Encodes the specified SC_CheckRoleName message, length delimited. Does not implicitly {@link m_proto.SC_CheckRoleName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_CheckRoleName
         * @static
         * @param {m_proto.ISC_CheckRoleName} message SC_CheckRoleName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_CheckRoleName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_CheckRoleName message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_CheckRoleName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_CheckRoleName} SC_CheckRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_CheckRoleName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_CheckRoleName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.has_exist = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_CheckRoleName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_CheckRoleName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_CheckRoleName} SC_CheckRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_CheckRoleName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_CheckRoleName message.
         * @function verify
         * @memberof m_proto.SC_CheckRoleName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_CheckRoleName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.has_exist != null && message.hasOwnProperty("has_exist"))
                if (typeof message.has_exist !== "boolean")
                    return "has_exist: boolean expected";
            return null;
        };

        /**
         * Creates a SC_CheckRoleName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_CheckRoleName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_CheckRoleName} SC_CheckRoleName
         */
        SC_CheckRoleName.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_CheckRoleName)
                return object;
            var message = new $root.m_proto.SC_CheckRoleName();
            if (object.has_exist != null)
                message.has_exist = Boolean(object.has_exist);
            return message;
        };

        /**
         * Creates a plain object from a SC_CheckRoleName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_CheckRoleName
         * @static
         * @param {m_proto.SC_CheckRoleName} message SC_CheckRoleName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_CheckRoleName.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.has_exist = false;
            if (message.has_exist != null && message.hasOwnProperty("has_exist"))
                object.has_exist = message.has_exist;
            return object;
        };

        /**
         * Converts this SC_CheckRoleName to JSON.
         * @function toJSON
         * @memberof m_proto.SC_CheckRoleName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_CheckRoleName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_CheckRoleName
         * @function getTypeUrl
         * @memberof m_proto.SC_CheckRoleName
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_CheckRoleName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_CheckRoleName";
        };

        return SC_CheckRoleName;
    })();

    m_proto.CS_RenameRole = (function() {

        /**
         * Properties of a CS_RenameRole.
         * @memberof m_proto
         * @interface ICS_RenameRole
         * @property {string|null} [role_name] CS_RenameRole role_name
         */

        /**
         * Constructs a new CS_RenameRole.
         * @memberof m_proto
         * @classdesc Represents a CS_RenameRole.
         * @implements ICS_RenameRole
         * @constructor
         * @param {m_proto.ICS_RenameRole=} [properties] Properties to set
         */
        function CS_RenameRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_RenameRole role_name.
         * @member {string} role_name
         * @memberof m_proto.CS_RenameRole
         * @instance
         */
        CS_RenameRole.prototype.role_name = "";

        /**
         * Creates a new CS_RenameRole instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_RenameRole
         * @static
         * @param {m_proto.ICS_RenameRole=} [properties] Properties to set
         * @returns {m_proto.CS_RenameRole} CS_RenameRole instance
         */
        CS_RenameRole.create = function create(properties) {
            return new CS_RenameRole(properties);
        };

        /**
         * Encodes the specified CS_RenameRole message. Does not implicitly {@link m_proto.CS_RenameRole.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_RenameRole
         * @static
         * @param {m_proto.ICS_RenameRole} message CS_RenameRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_RenameRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.role_name != null && Object.hasOwnProperty.call(message, "role_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.role_name);
            return writer;
        };

        /**
         * Encodes the specified CS_RenameRole message, length delimited. Does not implicitly {@link m_proto.CS_RenameRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_RenameRole
         * @static
         * @param {m_proto.ICS_RenameRole} message CS_RenameRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_RenameRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_RenameRole message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_RenameRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_RenameRole} CS_RenameRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_RenameRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_RenameRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.role_name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_RenameRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_RenameRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_RenameRole} CS_RenameRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_RenameRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_RenameRole message.
         * @function verify
         * @memberof m_proto.CS_RenameRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_RenameRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                if (!$util.isString(message.role_name))
                    return "role_name: string expected";
            return null;
        };

        /**
         * Creates a CS_RenameRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_RenameRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_RenameRole} CS_RenameRole
         */
        CS_RenameRole.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_RenameRole)
                return object;
            var message = new $root.m_proto.CS_RenameRole();
            if (object.role_name != null)
                message.role_name = String(object.role_name);
            return message;
        };

        /**
         * Creates a plain object from a CS_RenameRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_RenameRole
         * @static
         * @param {m_proto.CS_RenameRole} message CS_RenameRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_RenameRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.role_name = "";
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                object.role_name = message.role_name;
            return object;
        };

        /**
         * Converts this CS_RenameRole to JSON.
         * @function toJSON
         * @memberof m_proto.CS_RenameRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_RenameRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_RenameRole
         * @function getTypeUrl
         * @memberof m_proto.CS_RenameRole
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_RenameRole.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_RenameRole";
        };

        return CS_RenameRole;
    })();

    m_proto.SC_RenameRole = (function() {

        /**
         * Properties of a SC_RenameRole.
         * @memberof m_proto
         * @interface ISC_RenameRole
         * @property {number|null} [err_code] SC_RenameRole err_code
         * @property {string|null} [role_name] SC_RenameRole role_name
         * @property {number|null} [rename_time] SC_RenameRole rename_time
         */

        /**
         * Constructs a new SC_RenameRole.
         * @memberof m_proto
         * @classdesc Represents a SC_RenameRole.
         * @implements ISC_RenameRole
         * @constructor
         * @param {m_proto.ISC_RenameRole=} [properties] Properties to set
         */
        function SC_RenameRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_RenameRole err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_RenameRole
         * @instance
         */
        SC_RenameRole.prototype.err_code = 0;

        /**
         * SC_RenameRole role_name.
         * @member {string} role_name
         * @memberof m_proto.SC_RenameRole
         * @instance
         */
        SC_RenameRole.prototype.role_name = "";

        /**
         * SC_RenameRole rename_time.
         * @member {number} rename_time
         * @memberof m_proto.SC_RenameRole
         * @instance
         */
        SC_RenameRole.prototype.rename_time = 0;

        /**
         * Creates a new SC_RenameRole instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_RenameRole
         * @static
         * @param {m_proto.ISC_RenameRole=} [properties] Properties to set
         * @returns {m_proto.SC_RenameRole} SC_RenameRole instance
         */
        SC_RenameRole.create = function create(properties) {
            return new SC_RenameRole(properties);
        };

        /**
         * Encodes the specified SC_RenameRole message. Does not implicitly {@link m_proto.SC_RenameRole.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_RenameRole
         * @static
         * @param {m_proto.ISC_RenameRole} message SC_RenameRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_RenameRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            if (message.role_name != null && Object.hasOwnProperty.call(message, "role_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.role_name);
            if (message.rename_time != null && Object.hasOwnProperty.call(message, "rename_time"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.rename_time);
            return writer;
        };

        /**
         * Encodes the specified SC_RenameRole message, length delimited. Does not implicitly {@link m_proto.SC_RenameRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_RenameRole
         * @static
         * @param {m_proto.ISC_RenameRole} message SC_RenameRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_RenameRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_RenameRole message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_RenameRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_RenameRole} SC_RenameRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_RenameRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_RenameRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.role_name = reader.string();
                        break;
                    }
                case 3: {
                        message.rename_time = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_RenameRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_RenameRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_RenameRole} SC_RenameRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_RenameRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_RenameRole message.
         * @function verify
         * @memberof m_proto.SC_RenameRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_RenameRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                if (!$util.isString(message.role_name))
                    return "role_name: string expected";
            if (message.rename_time != null && message.hasOwnProperty("rename_time"))
                if (!$util.isInteger(message.rename_time))
                    return "rename_time: integer expected";
            return null;
        };

        /**
         * Creates a SC_RenameRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_RenameRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_RenameRole} SC_RenameRole
         */
        SC_RenameRole.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_RenameRole)
                return object;
            var message = new $root.m_proto.SC_RenameRole();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            if (object.role_name != null)
                message.role_name = String(object.role_name);
            if (object.rename_time != null)
                message.rename_time = object.rename_time >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_RenameRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_RenameRole
         * @static
         * @param {m_proto.SC_RenameRole} message SC_RenameRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_RenameRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err_code = 0;
                object.role_name = "";
                object.rename_time = 0;
            }
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                object.role_name = message.role_name;
            if (message.rename_time != null && message.hasOwnProperty("rename_time"))
                object.rename_time = message.rename_time;
            return object;
        };

        /**
         * Converts this SC_RenameRole to JSON.
         * @function toJSON
         * @memberof m_proto.SC_RenameRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_RenameRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_RenameRole
         * @function getTypeUrl
         * @memberof m_proto.SC_RenameRole
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_RenameRole.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_RenameRole";
        };

        return SC_RenameRole;
    })();

    m_proto.CS_CheckCreateProhibit = (function() {

        /**
         * Properties of a CS_CheckCreateProhibit.
         * @memberof m_proto
         * @interface ICS_CheckCreateProhibit
         * @property {string|null} [uid] CS_CheckCreateProhibit uid
         */

        /**
         * Constructs a new CS_CheckCreateProhibit.
         * @memberof m_proto
         * @classdesc Represents a CS_CheckCreateProhibit.
         * @implements ICS_CheckCreateProhibit
         * @constructor
         * @param {m_proto.ICS_CheckCreateProhibit=} [properties] Properties to set
         */
        function CS_CheckCreateProhibit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_CheckCreateProhibit uid.
         * @member {string} uid
         * @memberof m_proto.CS_CheckCreateProhibit
         * @instance
         */
        CS_CheckCreateProhibit.prototype.uid = "";

        /**
         * Creates a new CS_CheckCreateProhibit instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_CheckCreateProhibit
         * @static
         * @param {m_proto.ICS_CheckCreateProhibit=} [properties] Properties to set
         * @returns {m_proto.CS_CheckCreateProhibit} CS_CheckCreateProhibit instance
         */
        CS_CheckCreateProhibit.create = function create(properties) {
            return new CS_CheckCreateProhibit(properties);
        };

        /**
         * Encodes the specified CS_CheckCreateProhibit message. Does not implicitly {@link m_proto.CS_CheckCreateProhibit.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_CheckCreateProhibit
         * @static
         * @param {m_proto.ICS_CheckCreateProhibit} message CS_CheckCreateProhibit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_CheckCreateProhibit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            return writer;
        };

        /**
         * Encodes the specified CS_CheckCreateProhibit message, length delimited. Does not implicitly {@link m_proto.CS_CheckCreateProhibit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_CheckCreateProhibit
         * @static
         * @param {m_proto.ICS_CheckCreateProhibit} message CS_CheckCreateProhibit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_CheckCreateProhibit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_CheckCreateProhibit message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_CheckCreateProhibit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_CheckCreateProhibit} CS_CheckCreateProhibit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_CheckCreateProhibit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_CheckCreateProhibit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_CheckCreateProhibit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_CheckCreateProhibit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_CheckCreateProhibit} CS_CheckCreateProhibit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_CheckCreateProhibit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_CheckCreateProhibit message.
         * @function verify
         * @memberof m_proto.CS_CheckCreateProhibit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_CheckCreateProhibit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            return null;
        };

        /**
         * Creates a CS_CheckCreateProhibit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_CheckCreateProhibit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_CheckCreateProhibit} CS_CheckCreateProhibit
         */
        CS_CheckCreateProhibit.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_CheckCreateProhibit)
                return object;
            var message = new $root.m_proto.CS_CheckCreateProhibit();
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a CS_CheckCreateProhibit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_CheckCreateProhibit
         * @static
         * @param {m_proto.CS_CheckCreateProhibit} message CS_CheckCreateProhibit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_CheckCreateProhibit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uid = "";
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this CS_CheckCreateProhibit to JSON.
         * @function toJSON
         * @memberof m_proto.CS_CheckCreateProhibit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_CheckCreateProhibit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_CheckCreateProhibit
         * @function getTypeUrl
         * @memberof m_proto.CS_CheckCreateProhibit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_CheckCreateProhibit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_CheckCreateProhibit";
        };

        return CS_CheckCreateProhibit;
    })();

    m_proto.SC_CheckCreateProhibit = (function() {

        /**
         * Properties of a SC_CheckCreateProhibit.
         * @memberof m_proto
         * @interface ISC_CheckCreateProhibit
         * @property {boolean|null} [prohibit] SC_CheckCreateProhibit prohibit
         */

        /**
         * Constructs a new SC_CheckCreateProhibit.
         * @memberof m_proto
         * @classdesc Represents a SC_CheckCreateProhibit.
         * @implements ISC_CheckCreateProhibit
         * @constructor
         * @param {m_proto.ISC_CheckCreateProhibit=} [properties] Properties to set
         */
        function SC_CheckCreateProhibit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_CheckCreateProhibit prohibit.
         * @member {boolean} prohibit
         * @memberof m_proto.SC_CheckCreateProhibit
         * @instance
         */
        SC_CheckCreateProhibit.prototype.prohibit = false;

        /**
         * Creates a new SC_CheckCreateProhibit instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_CheckCreateProhibit
         * @static
         * @param {m_proto.ISC_CheckCreateProhibit=} [properties] Properties to set
         * @returns {m_proto.SC_CheckCreateProhibit} SC_CheckCreateProhibit instance
         */
        SC_CheckCreateProhibit.create = function create(properties) {
            return new SC_CheckCreateProhibit(properties);
        };

        /**
         * Encodes the specified SC_CheckCreateProhibit message. Does not implicitly {@link m_proto.SC_CheckCreateProhibit.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_CheckCreateProhibit
         * @static
         * @param {m_proto.ISC_CheckCreateProhibit} message SC_CheckCreateProhibit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_CheckCreateProhibit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.prohibit != null && Object.hasOwnProperty.call(message, "prohibit"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.prohibit);
            return writer;
        };

        /**
         * Encodes the specified SC_CheckCreateProhibit message, length delimited. Does not implicitly {@link m_proto.SC_CheckCreateProhibit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_CheckCreateProhibit
         * @static
         * @param {m_proto.ISC_CheckCreateProhibit} message SC_CheckCreateProhibit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_CheckCreateProhibit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_CheckCreateProhibit message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_CheckCreateProhibit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_CheckCreateProhibit} SC_CheckCreateProhibit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_CheckCreateProhibit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_CheckCreateProhibit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.prohibit = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_CheckCreateProhibit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_CheckCreateProhibit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_CheckCreateProhibit} SC_CheckCreateProhibit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_CheckCreateProhibit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_CheckCreateProhibit message.
         * @function verify
         * @memberof m_proto.SC_CheckCreateProhibit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_CheckCreateProhibit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.prohibit != null && message.hasOwnProperty("prohibit"))
                if (typeof message.prohibit !== "boolean")
                    return "prohibit: boolean expected";
            return null;
        };

        /**
         * Creates a SC_CheckCreateProhibit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_CheckCreateProhibit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_CheckCreateProhibit} SC_CheckCreateProhibit
         */
        SC_CheckCreateProhibit.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_CheckCreateProhibit)
                return object;
            var message = new $root.m_proto.SC_CheckCreateProhibit();
            if (object.prohibit != null)
                message.prohibit = Boolean(object.prohibit);
            return message;
        };

        /**
         * Creates a plain object from a SC_CheckCreateProhibit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_CheckCreateProhibit
         * @static
         * @param {m_proto.SC_CheckCreateProhibit} message SC_CheckCreateProhibit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_CheckCreateProhibit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.prohibit = false;
            if (message.prohibit != null && message.hasOwnProperty("prohibit"))
                object.prohibit = message.prohibit;
            return object;
        };

        /**
         * Converts this SC_CheckCreateProhibit to JSON.
         * @function toJSON
         * @memberof m_proto.SC_CheckCreateProhibit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_CheckCreateProhibit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_CheckCreateProhibit
         * @function getTypeUrl
         * @memberof m_proto.SC_CheckCreateProhibit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_CheckCreateProhibit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_CheckCreateProhibit";
        };

        return SC_CheckCreateProhibit;
    })();

    m_proto.CS_CheckReconnect = (function() {

        /**
         * Properties of a CS_CheckReconnect.
         * @memberof m_proto
         * @interface ICS_CheckReconnect
         * @property {number|Long|null} [token] CS_CheckReconnect token
         */

        /**
         * Constructs a new CS_CheckReconnect.
         * @memberof m_proto
         * @classdesc Represents a CS_CheckReconnect.
         * @implements ICS_CheckReconnect
         * @constructor
         * @param {m_proto.ICS_CheckReconnect=} [properties] Properties to set
         */
        function CS_CheckReconnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_CheckReconnect token.
         * @member {number|Long} token
         * @memberof m_proto.CS_CheckReconnect
         * @instance
         */
        CS_CheckReconnect.prototype.token = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new CS_CheckReconnect instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_CheckReconnect
         * @static
         * @param {m_proto.ICS_CheckReconnect=} [properties] Properties to set
         * @returns {m_proto.CS_CheckReconnect} CS_CheckReconnect instance
         */
        CS_CheckReconnect.create = function create(properties) {
            return new CS_CheckReconnect(properties);
        };

        /**
         * Encodes the specified CS_CheckReconnect message. Does not implicitly {@link m_proto.CS_CheckReconnect.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_CheckReconnect
         * @static
         * @param {m_proto.ICS_CheckReconnect} message CS_CheckReconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_CheckReconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.token);
            return writer;
        };

        /**
         * Encodes the specified CS_CheckReconnect message, length delimited. Does not implicitly {@link m_proto.CS_CheckReconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_CheckReconnect
         * @static
         * @param {m_proto.ICS_CheckReconnect} message CS_CheckReconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_CheckReconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_CheckReconnect message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_CheckReconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_CheckReconnect} CS_CheckReconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_CheckReconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_CheckReconnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_CheckReconnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_CheckReconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_CheckReconnect} CS_CheckReconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_CheckReconnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_CheckReconnect message.
         * @function verify
         * @memberof m_proto.CS_CheckReconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_CheckReconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isInteger(message.token) && !(message.token && $util.isInteger(message.token.low) && $util.isInteger(message.token.high)))
                    return "token: integer|Long expected";
            return null;
        };

        /**
         * Creates a CS_CheckReconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_CheckReconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_CheckReconnect} CS_CheckReconnect
         */
        CS_CheckReconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_CheckReconnect)
                return object;
            var message = new $root.m_proto.CS_CheckReconnect();
            if (object.token != null)
                if ($util.Long)
                    (message.token = $util.Long.fromValue(object.token)).unsigned = true;
                else if (typeof object.token === "string")
                    message.token = parseInt(object.token, 10);
                else if (typeof object.token === "number")
                    message.token = object.token;
                else if (typeof object.token === "object")
                    message.token = new $util.LongBits(object.token.low >>> 0, object.token.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a CS_CheckReconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_CheckReconnect
         * @static
         * @param {m_proto.CS_CheckReconnect} message CS_CheckReconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_CheckReconnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.token = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.token = options.longs === String ? "0" : 0;
            if (message.token != null && message.hasOwnProperty("token"))
                if (typeof message.token === "number")
                    object.token = options.longs === String ? String(message.token) : message.token;
                else
                    object.token = options.longs === String ? $util.Long.prototype.toString.call(message.token) : options.longs === Number ? new $util.LongBits(message.token.low >>> 0, message.token.high >>> 0).toNumber(true) : message.token;
            return object;
        };

        /**
         * Converts this CS_CheckReconnect to JSON.
         * @function toJSON
         * @memberof m_proto.CS_CheckReconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_CheckReconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_CheckReconnect
         * @function getTypeUrl
         * @memberof m_proto.CS_CheckReconnect
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_CheckReconnect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_CheckReconnect";
        };

        return CS_CheckReconnect;
    })();

    m_proto.SC_CheckReconnect = (function() {

        /**
         * Properties of a SC_CheckReconnect.
         * @memberof m_proto
         * @interface ISC_CheckReconnect
         * @property {number|null} [err_code] SC_CheckReconnect err_code
         * @property {boolean|null} [can_reconnect] SC_CheckReconnect can_reconnect
         */

        /**
         * Constructs a new SC_CheckReconnect.
         * @memberof m_proto
         * @classdesc Represents a SC_CheckReconnect.
         * @implements ISC_CheckReconnect
         * @constructor
         * @param {m_proto.ISC_CheckReconnect=} [properties] Properties to set
         */
        function SC_CheckReconnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_CheckReconnect err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_CheckReconnect
         * @instance
         */
        SC_CheckReconnect.prototype.err_code = 0;

        /**
         * SC_CheckReconnect can_reconnect.
         * @member {boolean} can_reconnect
         * @memberof m_proto.SC_CheckReconnect
         * @instance
         */
        SC_CheckReconnect.prototype.can_reconnect = false;

        /**
         * Creates a new SC_CheckReconnect instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_CheckReconnect
         * @static
         * @param {m_proto.ISC_CheckReconnect=} [properties] Properties to set
         * @returns {m_proto.SC_CheckReconnect} SC_CheckReconnect instance
         */
        SC_CheckReconnect.create = function create(properties) {
            return new SC_CheckReconnect(properties);
        };

        /**
         * Encodes the specified SC_CheckReconnect message. Does not implicitly {@link m_proto.SC_CheckReconnect.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_CheckReconnect
         * @static
         * @param {m_proto.ISC_CheckReconnect} message SC_CheckReconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_CheckReconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            if (message.can_reconnect != null && Object.hasOwnProperty.call(message, "can_reconnect"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.can_reconnect);
            return writer;
        };

        /**
         * Encodes the specified SC_CheckReconnect message, length delimited. Does not implicitly {@link m_proto.SC_CheckReconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_CheckReconnect
         * @static
         * @param {m_proto.ISC_CheckReconnect} message SC_CheckReconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_CheckReconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_CheckReconnect message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_CheckReconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_CheckReconnect} SC_CheckReconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_CheckReconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_CheckReconnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.can_reconnect = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_CheckReconnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_CheckReconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_CheckReconnect} SC_CheckReconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_CheckReconnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_CheckReconnect message.
         * @function verify
         * @memberof m_proto.SC_CheckReconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_CheckReconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            if (message.can_reconnect != null && message.hasOwnProperty("can_reconnect"))
                if (typeof message.can_reconnect !== "boolean")
                    return "can_reconnect: boolean expected";
            return null;
        };

        /**
         * Creates a SC_CheckReconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_CheckReconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_CheckReconnect} SC_CheckReconnect
         */
        SC_CheckReconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_CheckReconnect)
                return object;
            var message = new $root.m_proto.SC_CheckReconnect();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            if (object.can_reconnect != null)
                message.can_reconnect = Boolean(object.can_reconnect);
            return message;
        };

        /**
         * Creates a plain object from a SC_CheckReconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_CheckReconnect
         * @static
         * @param {m_proto.SC_CheckReconnect} message SC_CheckReconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_CheckReconnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err_code = 0;
                object.can_reconnect = false;
            }
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            if (message.can_reconnect != null && message.hasOwnProperty("can_reconnect"))
                object.can_reconnect = message.can_reconnect;
            return object;
        };

        /**
         * Converts this SC_CheckReconnect to JSON.
         * @function toJSON
         * @memberof m_proto.SC_CheckReconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_CheckReconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_CheckReconnect
         * @function getTypeUrl
         * @memberof m_proto.SC_CheckReconnect
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_CheckReconnect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_CheckReconnect";
        };

        return SC_CheckReconnect;
    })();

    m_proto.CS_SwitchObserve = (function() {

        /**
         * Properties of a CS_SwitchObserve.
         * @memberof m_proto
         * @interface ICS_SwitchObserve
         */

        /**
         * Constructs a new CS_SwitchObserve.
         * @memberof m_proto
         * @classdesc Represents a CS_SwitchObserve.
         * @implements ICS_SwitchObserve
         * @constructor
         * @param {m_proto.ICS_SwitchObserve=} [properties] Properties to set
         */
        function CS_SwitchObserve(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CS_SwitchObserve instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_SwitchObserve
         * @static
         * @param {m_proto.ICS_SwitchObserve=} [properties] Properties to set
         * @returns {m_proto.CS_SwitchObserve} CS_SwitchObserve instance
         */
        CS_SwitchObserve.create = function create(properties) {
            return new CS_SwitchObserve(properties);
        };

        /**
         * Encodes the specified CS_SwitchObserve message. Does not implicitly {@link m_proto.CS_SwitchObserve.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_SwitchObserve
         * @static
         * @param {m_proto.ICS_SwitchObserve} message CS_SwitchObserve message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_SwitchObserve.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CS_SwitchObserve message, length delimited. Does not implicitly {@link m_proto.CS_SwitchObserve.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_SwitchObserve
         * @static
         * @param {m_proto.ICS_SwitchObserve} message CS_SwitchObserve message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_SwitchObserve.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_SwitchObserve message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_SwitchObserve
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_SwitchObserve} CS_SwitchObserve
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_SwitchObserve.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_SwitchObserve();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_SwitchObserve message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_SwitchObserve
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_SwitchObserve} CS_SwitchObserve
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_SwitchObserve.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_SwitchObserve message.
         * @function verify
         * @memberof m_proto.CS_SwitchObserve
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_SwitchObserve.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CS_SwitchObserve message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_SwitchObserve
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_SwitchObserve} CS_SwitchObserve
         */
        CS_SwitchObserve.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_SwitchObserve)
                return object;
            return new $root.m_proto.CS_SwitchObserve();
        };

        /**
         * Creates a plain object from a CS_SwitchObserve message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_SwitchObserve
         * @static
         * @param {m_proto.CS_SwitchObserve} message CS_SwitchObserve
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_SwitchObserve.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CS_SwitchObserve to JSON.
         * @function toJSON
         * @memberof m_proto.CS_SwitchObserve
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_SwitchObserve.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_SwitchObserve
         * @function getTypeUrl
         * @memberof m_proto.CS_SwitchObserve
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_SwitchObserve.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_SwitchObserve";
        };

        return CS_SwitchObserve;
    })();

    m_proto.SC_SwitchObserve = (function() {

        /**
         * Properties of a SC_SwitchObserve.
         * @memberof m_proto
         * @interface ISC_SwitchObserve
         * @property {number|null} [err_code] SC_SwitchObserve err_code
         */

        /**
         * Constructs a new SC_SwitchObserve.
         * @memberof m_proto
         * @classdesc Represents a SC_SwitchObserve.
         * @implements ISC_SwitchObserve
         * @constructor
         * @param {m_proto.ISC_SwitchObserve=} [properties] Properties to set
         */
        function SC_SwitchObserve(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_SwitchObserve err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_SwitchObserve
         * @instance
         */
        SC_SwitchObserve.prototype.err_code = 0;

        /**
         * Creates a new SC_SwitchObserve instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_SwitchObserve
         * @static
         * @param {m_proto.ISC_SwitchObserve=} [properties] Properties to set
         * @returns {m_proto.SC_SwitchObserve} SC_SwitchObserve instance
         */
        SC_SwitchObserve.create = function create(properties) {
            return new SC_SwitchObserve(properties);
        };

        /**
         * Encodes the specified SC_SwitchObserve message. Does not implicitly {@link m_proto.SC_SwitchObserve.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_SwitchObserve
         * @static
         * @param {m_proto.ISC_SwitchObserve} message SC_SwitchObserve message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_SwitchObserve.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            return writer;
        };

        /**
         * Encodes the specified SC_SwitchObserve message, length delimited. Does not implicitly {@link m_proto.SC_SwitchObserve.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_SwitchObserve
         * @static
         * @param {m_proto.ISC_SwitchObserve} message SC_SwitchObserve message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_SwitchObserve.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_SwitchObserve message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_SwitchObserve
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_SwitchObserve} SC_SwitchObserve
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_SwitchObserve.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_SwitchObserve();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_SwitchObserve message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_SwitchObserve
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_SwitchObserve} SC_SwitchObserve
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_SwitchObserve.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_SwitchObserve message.
         * @function verify
         * @memberof m_proto.SC_SwitchObserve
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_SwitchObserve.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            return null;
        };

        /**
         * Creates a SC_SwitchObserve message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_SwitchObserve
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_SwitchObserve} SC_SwitchObserve
         */
        SC_SwitchObserve.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_SwitchObserve)
                return object;
            var message = new $root.m_proto.SC_SwitchObserve();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_SwitchObserve message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_SwitchObserve
         * @static
         * @param {m_proto.SC_SwitchObserve} message SC_SwitchObserve
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_SwitchObserve.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err_code = 0;
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            return object;
        };

        /**
         * Converts this SC_SwitchObserve to JSON.
         * @function toJSON
         * @memberof m_proto.SC_SwitchObserve
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_SwitchObserve.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_SwitchObserve
         * @function getTypeUrl
         * @memberof m_proto.SC_SwitchObserve
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_SwitchObserve.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_SwitchObserve";
        };

        return SC_SwitchObserve;
    })();

    m_proto.CS_RandomRoleName = (function() {

        /**
         * Properties of a CS_RandomRoleName.
         * @memberof m_proto
         * @interface ICS_RandomRoleName
         */

        /**
         * Constructs a new CS_RandomRoleName.
         * @memberof m_proto
         * @classdesc Represents a CS_RandomRoleName.
         * @implements ICS_RandomRoleName
         * @constructor
         * @param {m_proto.ICS_RandomRoleName=} [properties] Properties to set
         */
        function CS_RandomRoleName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CS_RandomRoleName instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_RandomRoleName
         * @static
         * @param {m_proto.ICS_RandomRoleName=} [properties] Properties to set
         * @returns {m_proto.CS_RandomRoleName} CS_RandomRoleName instance
         */
        CS_RandomRoleName.create = function create(properties) {
            return new CS_RandomRoleName(properties);
        };

        /**
         * Encodes the specified CS_RandomRoleName message. Does not implicitly {@link m_proto.CS_RandomRoleName.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_RandomRoleName
         * @static
         * @param {m_proto.ICS_RandomRoleName} message CS_RandomRoleName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_RandomRoleName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CS_RandomRoleName message, length delimited. Does not implicitly {@link m_proto.CS_RandomRoleName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_RandomRoleName
         * @static
         * @param {m_proto.ICS_RandomRoleName} message CS_RandomRoleName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_RandomRoleName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_RandomRoleName message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_RandomRoleName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_RandomRoleName} CS_RandomRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_RandomRoleName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_RandomRoleName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_RandomRoleName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_RandomRoleName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_RandomRoleName} CS_RandomRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_RandomRoleName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_RandomRoleName message.
         * @function verify
         * @memberof m_proto.CS_RandomRoleName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_RandomRoleName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CS_RandomRoleName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_RandomRoleName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_RandomRoleName} CS_RandomRoleName
         */
        CS_RandomRoleName.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_RandomRoleName)
                return object;
            return new $root.m_proto.CS_RandomRoleName();
        };

        /**
         * Creates a plain object from a CS_RandomRoleName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_RandomRoleName
         * @static
         * @param {m_proto.CS_RandomRoleName} message CS_RandomRoleName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_RandomRoleName.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CS_RandomRoleName to JSON.
         * @function toJSON
         * @memberof m_proto.CS_RandomRoleName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_RandomRoleName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_RandomRoleName
         * @function getTypeUrl
         * @memberof m_proto.CS_RandomRoleName
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_RandomRoleName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_RandomRoleName";
        };

        return CS_RandomRoleName;
    })();

    m_proto.SC_RandomRoleName = (function() {

        /**
         * Properties of a SC_RandomRoleName.
         * @memberof m_proto
         * @interface ISC_RandomRoleName
         * @property {string|null} [role_name] SC_RandomRoleName role_name
         */

        /**
         * Constructs a new SC_RandomRoleName.
         * @memberof m_proto
         * @classdesc Represents a SC_RandomRoleName.
         * @implements ISC_RandomRoleName
         * @constructor
         * @param {m_proto.ISC_RandomRoleName=} [properties] Properties to set
         */
        function SC_RandomRoleName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_RandomRoleName role_name.
         * @member {string} role_name
         * @memberof m_proto.SC_RandomRoleName
         * @instance
         */
        SC_RandomRoleName.prototype.role_name = "";

        /**
         * Creates a new SC_RandomRoleName instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_RandomRoleName
         * @static
         * @param {m_proto.ISC_RandomRoleName=} [properties] Properties to set
         * @returns {m_proto.SC_RandomRoleName} SC_RandomRoleName instance
         */
        SC_RandomRoleName.create = function create(properties) {
            return new SC_RandomRoleName(properties);
        };

        /**
         * Encodes the specified SC_RandomRoleName message. Does not implicitly {@link m_proto.SC_RandomRoleName.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_RandomRoleName
         * @static
         * @param {m_proto.ISC_RandomRoleName} message SC_RandomRoleName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_RandomRoleName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.role_name != null && Object.hasOwnProperty.call(message, "role_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.role_name);
            return writer;
        };

        /**
         * Encodes the specified SC_RandomRoleName message, length delimited. Does not implicitly {@link m_proto.SC_RandomRoleName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_RandomRoleName
         * @static
         * @param {m_proto.ISC_RandomRoleName} message SC_RandomRoleName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_RandomRoleName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_RandomRoleName message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_RandomRoleName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_RandomRoleName} SC_RandomRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_RandomRoleName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_RandomRoleName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.role_name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_RandomRoleName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_RandomRoleName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_RandomRoleName} SC_RandomRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_RandomRoleName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_RandomRoleName message.
         * @function verify
         * @memberof m_proto.SC_RandomRoleName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_RandomRoleName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                if (!$util.isString(message.role_name))
                    return "role_name: string expected";
            return null;
        };

        /**
         * Creates a SC_RandomRoleName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_RandomRoleName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_RandomRoleName} SC_RandomRoleName
         */
        SC_RandomRoleName.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_RandomRoleName)
                return object;
            var message = new $root.m_proto.SC_RandomRoleName();
            if (object.role_name != null)
                message.role_name = String(object.role_name);
            return message;
        };

        /**
         * Creates a plain object from a SC_RandomRoleName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_RandomRoleName
         * @static
         * @param {m_proto.SC_RandomRoleName} message SC_RandomRoleName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_RandomRoleName.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.role_name = "";
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                object.role_name = message.role_name;
            return object;
        };

        /**
         * Converts this SC_RandomRoleName to JSON.
         * @function toJSON
         * @memberof m_proto.SC_RandomRoleName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_RandomRoleName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_RandomRoleName
         * @function getTypeUrl
         * @memberof m_proto.SC_RandomRoleName
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_RandomRoleName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_RandomRoleName";
        };

        return SC_RandomRoleName;
    })();

    m_proto.CS_ChangeCareer = (function() {

        /**
         * Properties of a CS_ChangeCareer.
         * @memberof m_proto
         * @interface ICS_ChangeCareer
         * @property {number|null} [career] CS_ChangeCareer career
         */

        /**
         * Constructs a new CS_ChangeCareer.
         * @memberof m_proto
         * @classdesc Represents a CS_ChangeCareer.
         * @implements ICS_ChangeCareer
         * @constructor
         * @param {m_proto.ICS_ChangeCareer=} [properties] Properties to set
         */
        function CS_ChangeCareer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_ChangeCareer career.
         * @member {number} career
         * @memberof m_proto.CS_ChangeCareer
         * @instance
         */
        CS_ChangeCareer.prototype.career = 0;

        /**
         * Creates a new CS_ChangeCareer instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_ChangeCareer
         * @static
         * @param {m_proto.ICS_ChangeCareer=} [properties] Properties to set
         * @returns {m_proto.CS_ChangeCareer} CS_ChangeCareer instance
         */
        CS_ChangeCareer.create = function create(properties) {
            return new CS_ChangeCareer(properties);
        };

        /**
         * Encodes the specified CS_ChangeCareer message. Does not implicitly {@link m_proto.CS_ChangeCareer.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_ChangeCareer
         * @static
         * @param {m_proto.ICS_ChangeCareer} message CS_ChangeCareer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_ChangeCareer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.career != null && Object.hasOwnProperty.call(message, "career"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.career);
            return writer;
        };

        /**
         * Encodes the specified CS_ChangeCareer message, length delimited. Does not implicitly {@link m_proto.CS_ChangeCareer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_ChangeCareer
         * @static
         * @param {m_proto.ICS_ChangeCareer} message CS_ChangeCareer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_ChangeCareer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_ChangeCareer message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_ChangeCareer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_ChangeCareer} CS_ChangeCareer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_ChangeCareer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_ChangeCareer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.career = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_ChangeCareer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_ChangeCareer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_ChangeCareer} CS_ChangeCareer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_ChangeCareer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_ChangeCareer message.
         * @function verify
         * @memberof m_proto.CS_ChangeCareer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_ChangeCareer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.career != null && message.hasOwnProperty("career"))
                if (!$util.isInteger(message.career))
                    return "career: integer expected";
            return null;
        };

        /**
         * Creates a CS_ChangeCareer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_ChangeCareer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_ChangeCareer} CS_ChangeCareer
         */
        CS_ChangeCareer.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_ChangeCareer)
                return object;
            var message = new $root.m_proto.CS_ChangeCareer();
            if (object.career != null)
                message.career = object.career >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CS_ChangeCareer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_ChangeCareer
         * @static
         * @param {m_proto.CS_ChangeCareer} message CS_ChangeCareer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_ChangeCareer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.career = 0;
            if (message.career != null && message.hasOwnProperty("career"))
                object.career = message.career;
            return object;
        };

        /**
         * Converts this CS_ChangeCareer to JSON.
         * @function toJSON
         * @memberof m_proto.CS_ChangeCareer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_ChangeCareer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_ChangeCareer
         * @function getTypeUrl
         * @memberof m_proto.CS_ChangeCareer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_ChangeCareer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_ChangeCareer";
        };

        return CS_ChangeCareer;
    })();

    m_proto.SC_ChangeCareer = (function() {

        /**
         * Properties of a SC_ChangeCareer.
         * @memberof m_proto
         * @interface ISC_ChangeCareer
         * @property {number|null} [err_code] SC_ChangeCareer err_code
         * @property {number|null} [career] SC_ChangeCareer career
         */

        /**
         * Constructs a new SC_ChangeCareer.
         * @memberof m_proto
         * @classdesc Represents a SC_ChangeCareer.
         * @implements ISC_ChangeCareer
         * @constructor
         * @param {m_proto.ISC_ChangeCareer=} [properties] Properties to set
         */
        function SC_ChangeCareer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_ChangeCareer err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_ChangeCareer
         * @instance
         */
        SC_ChangeCareer.prototype.err_code = 0;

        /**
         * SC_ChangeCareer career.
         * @member {number} career
         * @memberof m_proto.SC_ChangeCareer
         * @instance
         */
        SC_ChangeCareer.prototype.career = 0;

        /**
         * Creates a new SC_ChangeCareer instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_ChangeCareer
         * @static
         * @param {m_proto.ISC_ChangeCareer=} [properties] Properties to set
         * @returns {m_proto.SC_ChangeCareer} SC_ChangeCareer instance
         */
        SC_ChangeCareer.create = function create(properties) {
            return new SC_ChangeCareer(properties);
        };

        /**
         * Encodes the specified SC_ChangeCareer message. Does not implicitly {@link m_proto.SC_ChangeCareer.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_ChangeCareer
         * @static
         * @param {m_proto.ISC_ChangeCareer} message SC_ChangeCareer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_ChangeCareer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            if (message.career != null && Object.hasOwnProperty.call(message, "career"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.career);
            return writer;
        };

        /**
         * Encodes the specified SC_ChangeCareer message, length delimited. Does not implicitly {@link m_proto.SC_ChangeCareer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_ChangeCareer
         * @static
         * @param {m_proto.ISC_ChangeCareer} message SC_ChangeCareer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_ChangeCareer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_ChangeCareer message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_ChangeCareer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_ChangeCareer} SC_ChangeCareer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_ChangeCareer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_ChangeCareer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.career = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_ChangeCareer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_ChangeCareer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_ChangeCareer} SC_ChangeCareer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_ChangeCareer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_ChangeCareer message.
         * @function verify
         * @memberof m_proto.SC_ChangeCareer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_ChangeCareer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            if (message.career != null && message.hasOwnProperty("career"))
                if (!$util.isInteger(message.career))
                    return "career: integer expected";
            return null;
        };

        /**
         * Creates a SC_ChangeCareer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_ChangeCareer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_ChangeCareer} SC_ChangeCareer
         */
        SC_ChangeCareer.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_ChangeCareer)
                return object;
            var message = new $root.m_proto.SC_ChangeCareer();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            if (object.career != null)
                message.career = object.career >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_ChangeCareer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_ChangeCareer
         * @static
         * @param {m_proto.SC_ChangeCareer} message SC_ChangeCareer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_ChangeCareer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err_code = 0;
                object.career = 0;
            }
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            if (message.career != null && message.hasOwnProperty("career"))
                object.career = message.career;
            return object;
        };

        /**
         * Converts this SC_ChangeCareer to JSON.
         * @function toJSON
         * @memberof m_proto.SC_ChangeCareer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_ChangeCareer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_ChangeCareer
         * @function getTypeUrl
         * @memberof m_proto.SC_ChangeCareer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_ChangeCareer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_ChangeCareer";
        };

        return SC_ChangeCareer;
    })();

    m_proto.CS_QuickLogin = (function() {

        /**
         * Properties of a CS_QuickLogin.
         * @memberof m_proto
         * @interface ICS_QuickLogin
         * @property {string|null} [account] CS_QuickLogin account
         * @property {number|null} [server_id] CS_QuickLogin server_id
         * @property {string|null} [site] CS_QuickLogin site
         */

        /**
         * Constructs a new CS_QuickLogin.
         * @memberof m_proto
         * @classdesc Represents a CS_QuickLogin.
         * @implements ICS_QuickLogin
         * @constructor
         * @param {m_proto.ICS_QuickLogin=} [properties] Properties to set
         */
        function CS_QuickLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_QuickLogin account.
         * @member {string} account
         * @memberof m_proto.CS_QuickLogin
         * @instance
         */
        CS_QuickLogin.prototype.account = "";

        /**
         * CS_QuickLogin server_id.
         * @member {number} server_id
         * @memberof m_proto.CS_QuickLogin
         * @instance
         */
        CS_QuickLogin.prototype.server_id = 0;

        /**
         * CS_QuickLogin site.
         * @member {string} site
         * @memberof m_proto.CS_QuickLogin
         * @instance
         */
        CS_QuickLogin.prototype.site = "";

        /**
         * Creates a new CS_QuickLogin instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_QuickLogin
         * @static
         * @param {m_proto.ICS_QuickLogin=} [properties] Properties to set
         * @returns {m_proto.CS_QuickLogin} CS_QuickLogin instance
         */
        CS_QuickLogin.create = function create(properties) {
            return new CS_QuickLogin(properties);
        };

        /**
         * Encodes the specified CS_QuickLogin message. Does not implicitly {@link m_proto.CS_QuickLogin.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_QuickLogin
         * @static
         * @param {m_proto.ICS_QuickLogin} message CS_QuickLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_QuickLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.server_id != null && Object.hasOwnProperty.call(message, "server_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.server_id);
            if (message.site != null && Object.hasOwnProperty.call(message, "site"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.site);
            return writer;
        };

        /**
         * Encodes the specified CS_QuickLogin message, length delimited. Does not implicitly {@link m_proto.CS_QuickLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_QuickLogin
         * @static
         * @param {m_proto.ICS_QuickLogin} message CS_QuickLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_QuickLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_QuickLogin message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_QuickLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_QuickLogin} CS_QuickLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_QuickLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_QuickLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.account = reader.string();
                        break;
                    }
                case 2: {
                        message.server_id = reader.uint32();
                        break;
                    }
                case 3: {
                        message.site = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_QuickLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_QuickLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_QuickLogin} CS_QuickLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_QuickLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_QuickLogin message.
         * @function verify
         * @memberof m_proto.CS_QuickLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_QuickLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.server_id != null && message.hasOwnProperty("server_id"))
                if (!$util.isInteger(message.server_id))
                    return "server_id: integer expected";
            if (message.site != null && message.hasOwnProperty("site"))
                if (!$util.isString(message.site))
                    return "site: string expected";
            return null;
        };

        /**
         * Creates a CS_QuickLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_QuickLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_QuickLogin} CS_QuickLogin
         */
        CS_QuickLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_QuickLogin)
                return object;
            var message = new $root.m_proto.CS_QuickLogin();
            if (object.account != null)
                message.account = String(object.account);
            if (object.server_id != null)
                message.server_id = object.server_id >>> 0;
            if (object.site != null)
                message.site = String(object.site);
            return message;
        };

        /**
         * Creates a plain object from a CS_QuickLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_QuickLogin
         * @static
         * @param {m_proto.CS_QuickLogin} message CS_QuickLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_QuickLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.server_id = 0;
                object.site = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.server_id != null && message.hasOwnProperty("server_id"))
                object.server_id = message.server_id;
            if (message.site != null && message.hasOwnProperty("site"))
                object.site = message.site;
            return object;
        };

        /**
         * Converts this CS_QuickLogin to JSON.
         * @function toJSON
         * @memberof m_proto.CS_QuickLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_QuickLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_QuickLogin
         * @function getTypeUrl
         * @memberof m_proto.CS_QuickLogin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_QuickLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_QuickLogin";
        };

        return CS_QuickLogin;
    })();

    m_proto.SC_QuickLogin = (function() {

        /**
         * Properties of a SC_QuickLogin.
         * @memberof m_proto
         * @interface ISC_QuickLogin
         * @property {number|null} [err_code] SC_QuickLogin err_code
         * @property {number|Long|null} [role_id] SC_QuickLogin role_id
         * @property {string|null} [roleName] SC_QuickLogin roleName
         * @property {number|null} [server_time] SC_QuickLogin server_time
         * @property {number|Long|null} [token] SC_QuickLogin token
         * @property {number|null} [create_time] SC_QuickLogin create_time
         * @property {number|null} [open_time] SC_QuickLogin open_time
         */

        /**
         * Constructs a new SC_QuickLogin.
         * @memberof m_proto
         * @classdesc Represents a SC_QuickLogin.
         * @implements ISC_QuickLogin
         * @constructor
         * @param {m_proto.ISC_QuickLogin=} [properties] Properties to set
         */
        function SC_QuickLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_QuickLogin err_code.
         * @member {number} err_code
         * @memberof m_proto.SC_QuickLogin
         * @instance
         */
        SC_QuickLogin.prototype.err_code = 0;

        /**
         * SC_QuickLogin role_id.
         * @member {number|Long} role_id
         * @memberof m_proto.SC_QuickLogin
         * @instance
         */
        SC_QuickLogin.prototype.role_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SC_QuickLogin roleName.
         * @member {string} roleName
         * @memberof m_proto.SC_QuickLogin
         * @instance
         */
        SC_QuickLogin.prototype.roleName = "";

        /**
         * SC_QuickLogin server_time.
         * @member {number} server_time
         * @memberof m_proto.SC_QuickLogin
         * @instance
         */
        SC_QuickLogin.prototype.server_time = 0;

        /**
         * SC_QuickLogin token.
         * @member {number|Long} token
         * @memberof m_proto.SC_QuickLogin
         * @instance
         */
        SC_QuickLogin.prototype.token = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SC_QuickLogin create_time.
         * @member {number} create_time
         * @memberof m_proto.SC_QuickLogin
         * @instance
         */
        SC_QuickLogin.prototype.create_time = 0;

        /**
         * SC_QuickLogin open_time.
         * @member {number} open_time
         * @memberof m_proto.SC_QuickLogin
         * @instance
         */
        SC_QuickLogin.prototype.open_time = 0;

        /**
         * Creates a new SC_QuickLogin instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_QuickLogin
         * @static
         * @param {m_proto.ISC_QuickLogin=} [properties] Properties to set
         * @returns {m_proto.SC_QuickLogin} SC_QuickLogin instance
         */
        SC_QuickLogin.create = function create(properties) {
            return new SC_QuickLogin(properties);
        };

        /**
         * Encodes the specified SC_QuickLogin message. Does not implicitly {@link m_proto.SC_QuickLogin.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_QuickLogin
         * @static
         * @param {m_proto.ISC_QuickLogin} message SC_QuickLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_QuickLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err_code != null && Object.hasOwnProperty.call(message, "err_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.err_code);
            if (message.role_id != null && Object.hasOwnProperty.call(message, "role_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.role_id);
            if (message.roleName != null && Object.hasOwnProperty.call(message, "roleName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roleName);
            if (message.server_time != null && Object.hasOwnProperty.call(message, "server_time"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.server_time);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.token);
            if (message.create_time != null && Object.hasOwnProperty.call(message, "create_time"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.create_time);
            if (message.open_time != null && Object.hasOwnProperty.call(message, "open_time"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.open_time);
            return writer;
        };

        /**
         * Encodes the specified SC_QuickLogin message, length delimited. Does not implicitly {@link m_proto.SC_QuickLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_QuickLogin
         * @static
         * @param {m_proto.ISC_QuickLogin} message SC_QuickLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_QuickLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_QuickLogin message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_QuickLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_QuickLogin} SC_QuickLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_QuickLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_QuickLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.err_code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.role_id = reader.uint64();
                        break;
                    }
                case 3: {
                        message.roleName = reader.string();
                        break;
                    }
                case 10: {
                        message.server_time = reader.uint32();
                        break;
                    }
                case 11: {
                        message.token = reader.uint64();
                        break;
                    }
                case 12: {
                        message.create_time = reader.uint32();
                        break;
                    }
                case 13: {
                        message.open_time = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_QuickLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_QuickLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_QuickLogin} SC_QuickLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_QuickLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_QuickLogin message.
         * @function verify
         * @memberof m_proto.SC_QuickLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_QuickLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                if (!$util.isInteger(message.err_code))
                    return "err_code: integer expected";
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                if (!$util.isInteger(message.role_id) && !(message.role_id && $util.isInteger(message.role_id.low) && $util.isInteger(message.role_id.high)))
                    return "role_id: integer|Long expected";
            if (message.roleName != null && message.hasOwnProperty("roleName"))
                if (!$util.isString(message.roleName))
                    return "roleName: string expected";
            if (message.server_time != null && message.hasOwnProperty("server_time"))
                if (!$util.isInteger(message.server_time))
                    return "server_time: integer expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isInteger(message.token) && !(message.token && $util.isInteger(message.token.low) && $util.isInteger(message.token.high)))
                    return "token: integer|Long expected";
            if (message.create_time != null && message.hasOwnProperty("create_time"))
                if (!$util.isInteger(message.create_time))
                    return "create_time: integer expected";
            if (message.open_time != null && message.hasOwnProperty("open_time"))
                if (!$util.isInteger(message.open_time))
                    return "open_time: integer expected";
            return null;
        };

        /**
         * Creates a SC_QuickLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_QuickLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_QuickLogin} SC_QuickLogin
         */
        SC_QuickLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_QuickLogin)
                return object;
            var message = new $root.m_proto.SC_QuickLogin();
            if (object.err_code != null)
                message.err_code = object.err_code >>> 0;
            if (object.role_id != null)
                if ($util.Long)
                    (message.role_id = $util.Long.fromValue(object.role_id)).unsigned = true;
                else if (typeof object.role_id === "string")
                    message.role_id = parseInt(object.role_id, 10);
                else if (typeof object.role_id === "number")
                    message.role_id = object.role_id;
                else if (typeof object.role_id === "object")
                    message.role_id = new $util.LongBits(object.role_id.low >>> 0, object.role_id.high >>> 0).toNumber(true);
            if (object.roleName != null)
                message.roleName = String(object.roleName);
            if (object.server_time != null)
                message.server_time = object.server_time >>> 0;
            if (object.token != null)
                if ($util.Long)
                    (message.token = $util.Long.fromValue(object.token)).unsigned = true;
                else if (typeof object.token === "string")
                    message.token = parseInt(object.token, 10);
                else if (typeof object.token === "number")
                    message.token = object.token;
                else if (typeof object.token === "object")
                    message.token = new $util.LongBits(object.token.low >>> 0, object.token.high >>> 0).toNumber(true);
            if (object.create_time != null)
                message.create_time = object.create_time >>> 0;
            if (object.open_time != null)
                message.open_time = object.open_time >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_QuickLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_QuickLogin
         * @static
         * @param {m_proto.SC_QuickLogin} message SC_QuickLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_QuickLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.err_code = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.role_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.role_id = options.longs === String ? "0" : 0;
                object.roleName = "";
                object.server_time = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.token = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.token = options.longs === String ? "0" : 0;
                object.create_time = 0;
                object.open_time = 0;
            }
            if (message.err_code != null && message.hasOwnProperty("err_code"))
                object.err_code = message.err_code;
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                if (typeof message.role_id === "number")
                    object.role_id = options.longs === String ? String(message.role_id) : message.role_id;
                else
                    object.role_id = options.longs === String ? $util.Long.prototype.toString.call(message.role_id) : options.longs === Number ? new $util.LongBits(message.role_id.low >>> 0, message.role_id.high >>> 0).toNumber(true) : message.role_id;
            if (message.roleName != null && message.hasOwnProperty("roleName"))
                object.roleName = message.roleName;
            if (message.server_time != null && message.hasOwnProperty("server_time"))
                object.server_time = message.server_time;
            if (message.token != null && message.hasOwnProperty("token"))
                if (typeof message.token === "number")
                    object.token = options.longs === String ? String(message.token) : message.token;
                else
                    object.token = options.longs === String ? $util.Long.prototype.toString.call(message.token) : options.longs === Number ? new $util.LongBits(message.token.low >>> 0, message.token.high >>> 0).toNumber(true) : message.token;
            if (message.create_time != null && message.hasOwnProperty("create_time"))
                object.create_time = message.create_time;
            if (message.open_time != null && message.hasOwnProperty("open_time"))
                object.open_time = message.open_time;
            return object;
        };

        /**
         * Converts this SC_QuickLogin to JSON.
         * @function toJSON
         * @memberof m_proto.SC_QuickLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_QuickLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_QuickLogin
         * @function getTypeUrl
         * @memberof m_proto.SC_QuickLogin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_QuickLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_QuickLogin";
        };

        return SC_QuickLogin;
    })();

    m_proto.CS_GetPlayerInfo = (function() {

        /**
         * Properties of a CS_GetPlayerInfo.
         * @memberof m_proto
         * @interface ICS_GetPlayerInfo
         */

        /**
         * Constructs a new CS_GetPlayerInfo.
         * @memberof m_proto
         * @classdesc Represents a CS_GetPlayerInfo.
         * @implements ICS_GetPlayerInfo
         * @constructor
         * @param {m_proto.ICS_GetPlayerInfo=} [properties] Properties to set
         */
        function CS_GetPlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CS_GetPlayerInfo instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_GetPlayerInfo
         * @static
         * @param {m_proto.ICS_GetPlayerInfo=} [properties] Properties to set
         * @returns {m_proto.CS_GetPlayerInfo} CS_GetPlayerInfo instance
         */
        CS_GetPlayerInfo.create = function create(properties) {
            return new CS_GetPlayerInfo(properties);
        };

        /**
         * Encodes the specified CS_GetPlayerInfo message. Does not implicitly {@link m_proto.CS_GetPlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_GetPlayerInfo
         * @static
         * @param {m_proto.ICS_GetPlayerInfo} message CS_GetPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_GetPlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CS_GetPlayerInfo message, length delimited. Does not implicitly {@link m_proto.CS_GetPlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_GetPlayerInfo
         * @static
         * @param {m_proto.ICS_GetPlayerInfo} message CS_GetPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_GetPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_GetPlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_GetPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_GetPlayerInfo} CS_GetPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_GetPlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_GetPlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_GetPlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_GetPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_GetPlayerInfo} CS_GetPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_GetPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_GetPlayerInfo message.
         * @function verify
         * @memberof m_proto.CS_GetPlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_GetPlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CS_GetPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_GetPlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_GetPlayerInfo} CS_GetPlayerInfo
         */
        CS_GetPlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_GetPlayerInfo)
                return object;
            return new $root.m_proto.CS_GetPlayerInfo();
        };

        /**
         * Creates a plain object from a CS_GetPlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_GetPlayerInfo
         * @static
         * @param {m_proto.CS_GetPlayerInfo} message CS_GetPlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_GetPlayerInfo.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CS_GetPlayerInfo to JSON.
         * @function toJSON
         * @memberof m_proto.CS_GetPlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_GetPlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_GetPlayerInfo
         * @function getTypeUrl
         * @memberof m_proto.CS_GetPlayerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_GetPlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_GetPlayerInfo";
        };

        return CS_GetPlayerInfo;
    })();

    m_proto.SC_GetPlayerInfo = (function() {

        /**
         * Properties of a SC_GetPlayerInfo.
         * @memberof m_proto
         * @interface ISC_GetPlayerInfo
         * @property {number|Long|null} [role_id] SC_GetPlayerInfo role_id
         * @property {string|null} [role_name] SC_GetPlayerInfo role_name
         * @property {number|null} [career] SC_GetPlayerInfo career
         */

        /**
         * Constructs a new SC_GetPlayerInfo.
         * @memberof m_proto
         * @classdesc Represents a SC_GetPlayerInfo.
         * @implements ISC_GetPlayerInfo
         * @constructor
         * @param {m_proto.ISC_GetPlayerInfo=} [properties] Properties to set
         */
        function SC_GetPlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_GetPlayerInfo role_id.
         * @member {number|Long} role_id
         * @memberof m_proto.SC_GetPlayerInfo
         * @instance
         */
        SC_GetPlayerInfo.prototype.role_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SC_GetPlayerInfo role_name.
         * @member {string} role_name
         * @memberof m_proto.SC_GetPlayerInfo
         * @instance
         */
        SC_GetPlayerInfo.prototype.role_name = "";

        /**
         * SC_GetPlayerInfo career.
         * @member {number} career
         * @memberof m_proto.SC_GetPlayerInfo
         * @instance
         */
        SC_GetPlayerInfo.prototype.career = 0;

        /**
         * Creates a new SC_GetPlayerInfo instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_GetPlayerInfo
         * @static
         * @param {m_proto.ISC_GetPlayerInfo=} [properties] Properties to set
         * @returns {m_proto.SC_GetPlayerInfo} SC_GetPlayerInfo instance
         */
        SC_GetPlayerInfo.create = function create(properties) {
            return new SC_GetPlayerInfo(properties);
        };

        /**
         * Encodes the specified SC_GetPlayerInfo message. Does not implicitly {@link m_proto.SC_GetPlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_GetPlayerInfo
         * @static
         * @param {m_proto.ISC_GetPlayerInfo} message SC_GetPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_GetPlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.role_id != null && Object.hasOwnProperty.call(message, "role_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.role_id);
            if (message.role_name != null && Object.hasOwnProperty.call(message, "role_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.role_name);
            if (message.career != null && Object.hasOwnProperty.call(message, "career"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.career);
            return writer;
        };

        /**
         * Encodes the specified SC_GetPlayerInfo message, length delimited. Does not implicitly {@link m_proto.SC_GetPlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_GetPlayerInfo
         * @static
         * @param {m_proto.ISC_GetPlayerInfo} message SC_GetPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_GetPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_GetPlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_GetPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_GetPlayerInfo} SC_GetPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_GetPlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_GetPlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.role_id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.role_name = reader.string();
                        break;
                    }
                case 10: {
                        message.career = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_GetPlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_GetPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_GetPlayerInfo} SC_GetPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_GetPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_GetPlayerInfo message.
         * @function verify
         * @memberof m_proto.SC_GetPlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_GetPlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                if (!$util.isInteger(message.role_id) && !(message.role_id && $util.isInteger(message.role_id.low) && $util.isInteger(message.role_id.high)))
                    return "role_id: integer|Long expected";
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                if (!$util.isString(message.role_name))
                    return "role_name: string expected";
            if (message.career != null && message.hasOwnProperty("career"))
                if (!$util.isInteger(message.career))
                    return "career: integer expected";
            return null;
        };

        /**
         * Creates a SC_GetPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_GetPlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_GetPlayerInfo} SC_GetPlayerInfo
         */
        SC_GetPlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_GetPlayerInfo)
                return object;
            var message = new $root.m_proto.SC_GetPlayerInfo();
            if (object.role_id != null)
                if ($util.Long)
                    (message.role_id = $util.Long.fromValue(object.role_id)).unsigned = true;
                else if (typeof object.role_id === "string")
                    message.role_id = parseInt(object.role_id, 10);
                else if (typeof object.role_id === "number")
                    message.role_id = object.role_id;
                else if (typeof object.role_id === "object")
                    message.role_id = new $util.LongBits(object.role_id.low >>> 0, object.role_id.high >>> 0).toNumber(true);
            if (object.role_name != null)
                message.role_name = String(object.role_name);
            if (object.career != null)
                message.career = object.career >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_GetPlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_GetPlayerInfo
         * @static
         * @param {m_proto.SC_GetPlayerInfo} message SC_GetPlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_GetPlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.role_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.role_id = options.longs === String ? "0" : 0;
                object.role_name = "";
                object.career = 0;
            }
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                if (typeof message.role_id === "number")
                    object.role_id = options.longs === String ? String(message.role_id) : message.role_id;
                else
                    object.role_id = options.longs === String ? $util.Long.prototype.toString.call(message.role_id) : options.longs === Number ? new $util.LongBits(message.role_id.low >>> 0, message.role_id.high >>> 0).toNumber(true) : message.role_id;
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                object.role_name = message.role_name;
            if (message.career != null && message.hasOwnProperty("career"))
                object.career = message.career;
            return object;
        };

        /**
         * Converts this SC_GetPlayerInfo to JSON.
         * @function toJSON
         * @memberof m_proto.SC_GetPlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_GetPlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_GetPlayerInfo
         * @function getTypeUrl
         * @memberof m_proto.SC_GetPlayerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_GetPlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_GetPlayerInfo";
        };

        return SC_GetPlayerInfo;
    })();

    m_proto.CS_GetPlayerAttr = (function() {

        /**
         * Properties of a CS_GetPlayerAttr.
         * @memberof m_proto
         * @interface ICS_GetPlayerAttr
         */

        /**
         * Constructs a new CS_GetPlayerAttr.
         * @memberof m_proto
         * @classdesc Represents a CS_GetPlayerAttr.
         * @implements ICS_GetPlayerAttr
         * @constructor
         * @param {m_proto.ICS_GetPlayerAttr=} [properties] Properties to set
         */
        function CS_GetPlayerAttr(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CS_GetPlayerAttr instance using the specified properties.
         * @function create
         * @memberof m_proto.CS_GetPlayerAttr
         * @static
         * @param {m_proto.ICS_GetPlayerAttr=} [properties] Properties to set
         * @returns {m_proto.CS_GetPlayerAttr} CS_GetPlayerAttr instance
         */
        CS_GetPlayerAttr.create = function create(properties) {
            return new CS_GetPlayerAttr(properties);
        };

        /**
         * Encodes the specified CS_GetPlayerAttr message. Does not implicitly {@link m_proto.CS_GetPlayerAttr.verify|verify} messages.
         * @function encode
         * @memberof m_proto.CS_GetPlayerAttr
         * @static
         * @param {m_proto.ICS_GetPlayerAttr} message CS_GetPlayerAttr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_GetPlayerAttr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CS_GetPlayerAttr message, length delimited. Does not implicitly {@link m_proto.CS_GetPlayerAttr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.CS_GetPlayerAttr
         * @static
         * @param {m_proto.ICS_GetPlayerAttr} message CS_GetPlayerAttr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_GetPlayerAttr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_GetPlayerAttr message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.CS_GetPlayerAttr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.CS_GetPlayerAttr} CS_GetPlayerAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_GetPlayerAttr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.CS_GetPlayerAttr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_GetPlayerAttr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.CS_GetPlayerAttr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.CS_GetPlayerAttr} CS_GetPlayerAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_GetPlayerAttr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_GetPlayerAttr message.
         * @function verify
         * @memberof m_proto.CS_GetPlayerAttr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_GetPlayerAttr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CS_GetPlayerAttr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.CS_GetPlayerAttr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.CS_GetPlayerAttr} CS_GetPlayerAttr
         */
        CS_GetPlayerAttr.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.CS_GetPlayerAttr)
                return object;
            return new $root.m_proto.CS_GetPlayerAttr();
        };

        /**
         * Creates a plain object from a CS_GetPlayerAttr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.CS_GetPlayerAttr
         * @static
         * @param {m_proto.CS_GetPlayerAttr} message CS_GetPlayerAttr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_GetPlayerAttr.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CS_GetPlayerAttr to JSON.
         * @function toJSON
         * @memberof m_proto.CS_GetPlayerAttr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_GetPlayerAttr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CS_GetPlayerAttr
         * @function getTypeUrl
         * @memberof m_proto.CS_GetPlayerAttr
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CS_GetPlayerAttr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.CS_GetPlayerAttr";
        };

        return CS_GetPlayerAttr;
    })();

    m_proto.SC_GetPlayerAttr = (function() {

        /**
         * Properties of a SC_GetPlayerAttr.
         * @memberof m_proto
         * @interface ISC_GetPlayerAttr
         */

        /**
         * Constructs a new SC_GetPlayerAttr.
         * @memberof m_proto
         * @classdesc Represents a SC_GetPlayerAttr.
         * @implements ISC_GetPlayerAttr
         * @constructor
         * @param {m_proto.ISC_GetPlayerAttr=} [properties] Properties to set
         */
        function SC_GetPlayerAttr(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SC_GetPlayerAttr instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_GetPlayerAttr
         * @static
         * @param {m_proto.ISC_GetPlayerAttr=} [properties] Properties to set
         * @returns {m_proto.SC_GetPlayerAttr} SC_GetPlayerAttr instance
         */
        SC_GetPlayerAttr.create = function create(properties) {
            return new SC_GetPlayerAttr(properties);
        };

        /**
         * Encodes the specified SC_GetPlayerAttr message. Does not implicitly {@link m_proto.SC_GetPlayerAttr.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_GetPlayerAttr
         * @static
         * @param {m_proto.ISC_GetPlayerAttr} message SC_GetPlayerAttr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_GetPlayerAttr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SC_GetPlayerAttr message, length delimited. Does not implicitly {@link m_proto.SC_GetPlayerAttr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_GetPlayerAttr
         * @static
         * @param {m_proto.ISC_GetPlayerAttr} message SC_GetPlayerAttr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_GetPlayerAttr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_GetPlayerAttr message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_GetPlayerAttr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_GetPlayerAttr} SC_GetPlayerAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_GetPlayerAttr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_GetPlayerAttr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_GetPlayerAttr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_GetPlayerAttr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_GetPlayerAttr} SC_GetPlayerAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_GetPlayerAttr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_GetPlayerAttr message.
         * @function verify
         * @memberof m_proto.SC_GetPlayerAttr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_GetPlayerAttr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SC_GetPlayerAttr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_GetPlayerAttr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_GetPlayerAttr} SC_GetPlayerAttr
         */
        SC_GetPlayerAttr.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_GetPlayerAttr)
                return object;
            return new $root.m_proto.SC_GetPlayerAttr();
        };

        /**
         * Creates a plain object from a SC_GetPlayerAttr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_GetPlayerAttr
         * @static
         * @param {m_proto.SC_GetPlayerAttr} message SC_GetPlayerAttr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_GetPlayerAttr.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SC_GetPlayerAttr to JSON.
         * @function toJSON
         * @memberof m_proto.SC_GetPlayerAttr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_GetPlayerAttr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_GetPlayerAttr
         * @function getTypeUrl
         * @memberof m_proto.SC_GetPlayerAttr
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_GetPlayerAttr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_GetPlayerAttr";
        };

        return SC_GetPlayerAttr;
    })();

    m_proto.SC_MiscNotify = (function() {

        /**
         * Properties of a SC_MiscNotify.
         * @memberof m_proto
         * @interface ISC_MiscNotify
         */

        /**
         * Constructs a new SC_MiscNotify.
         * @memberof m_proto
         * @classdesc Represents a SC_MiscNotify.
         * @implements ISC_MiscNotify
         * @constructor
         * @param {m_proto.ISC_MiscNotify=} [properties] Properties to set
         */
        function SC_MiscNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SC_MiscNotify instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_MiscNotify
         * @static
         * @param {m_proto.ISC_MiscNotify=} [properties] Properties to set
         * @returns {m_proto.SC_MiscNotify} SC_MiscNotify instance
         */
        SC_MiscNotify.create = function create(properties) {
            return new SC_MiscNotify(properties);
        };

        /**
         * Encodes the specified SC_MiscNotify message. Does not implicitly {@link m_proto.SC_MiscNotify.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_MiscNotify
         * @static
         * @param {m_proto.ISC_MiscNotify} message SC_MiscNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_MiscNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SC_MiscNotify message, length delimited. Does not implicitly {@link m_proto.SC_MiscNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_MiscNotify
         * @static
         * @param {m_proto.ISC_MiscNotify} message SC_MiscNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_MiscNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_MiscNotify message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_MiscNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_MiscNotify} SC_MiscNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_MiscNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_MiscNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_MiscNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_MiscNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_MiscNotify} SC_MiscNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_MiscNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_MiscNotify message.
         * @function verify
         * @memberof m_proto.SC_MiscNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_MiscNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SC_MiscNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_MiscNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_MiscNotify} SC_MiscNotify
         */
        SC_MiscNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_MiscNotify)
                return object;
            return new $root.m_proto.SC_MiscNotify();
        };

        /**
         * Creates a plain object from a SC_MiscNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_MiscNotify
         * @static
         * @param {m_proto.SC_MiscNotify} message SC_MiscNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_MiscNotify.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SC_MiscNotify to JSON.
         * @function toJSON
         * @memberof m_proto.SC_MiscNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_MiscNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_MiscNotify
         * @function getTypeUrl
         * @memberof m_proto.SC_MiscNotify
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_MiscNotify.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_MiscNotify";
        };

        return SC_MiscNotify;
    })();

    m_proto.SC_TimeNotify = (function() {

        /**
         * Properties of a SC_TimeNotify.
         * @memberof m_proto
         * @interface ISC_TimeNotify
         * @property {number|null} [create_day] SC_TimeNotify create_day
         * @property {number|null} [open_day] SC_TimeNotify open_day
         */

        /**
         * Constructs a new SC_TimeNotify.
         * @memberof m_proto
         * @classdesc Represents a SC_TimeNotify.
         * @implements ISC_TimeNotify
         * @constructor
         * @param {m_proto.ISC_TimeNotify=} [properties] Properties to set
         */
        function SC_TimeNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_TimeNotify create_day.
         * @member {number} create_day
         * @memberof m_proto.SC_TimeNotify
         * @instance
         */
        SC_TimeNotify.prototype.create_day = 0;

        /**
         * SC_TimeNotify open_day.
         * @member {number} open_day
         * @memberof m_proto.SC_TimeNotify
         * @instance
         */
        SC_TimeNotify.prototype.open_day = 0;

        /**
         * Creates a new SC_TimeNotify instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_TimeNotify
         * @static
         * @param {m_proto.ISC_TimeNotify=} [properties] Properties to set
         * @returns {m_proto.SC_TimeNotify} SC_TimeNotify instance
         */
        SC_TimeNotify.create = function create(properties) {
            return new SC_TimeNotify(properties);
        };

        /**
         * Encodes the specified SC_TimeNotify message. Does not implicitly {@link m_proto.SC_TimeNotify.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_TimeNotify
         * @static
         * @param {m_proto.ISC_TimeNotify} message SC_TimeNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_TimeNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.create_day != null && Object.hasOwnProperty.call(message, "create_day"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.create_day);
            if (message.open_day != null && Object.hasOwnProperty.call(message, "open_day"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.open_day);
            return writer;
        };

        /**
         * Encodes the specified SC_TimeNotify message, length delimited. Does not implicitly {@link m_proto.SC_TimeNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_TimeNotify
         * @static
         * @param {m_proto.ISC_TimeNotify} message SC_TimeNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_TimeNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_TimeNotify message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_TimeNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_TimeNotify} SC_TimeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_TimeNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_TimeNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.create_day = reader.uint32();
                        break;
                    }
                case 2: {
                        message.open_day = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_TimeNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_TimeNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_TimeNotify} SC_TimeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_TimeNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_TimeNotify message.
         * @function verify
         * @memberof m_proto.SC_TimeNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_TimeNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.create_day != null && message.hasOwnProperty("create_day"))
                if (!$util.isInteger(message.create_day))
                    return "create_day: integer expected";
            if (message.open_day != null && message.hasOwnProperty("open_day"))
                if (!$util.isInteger(message.open_day))
                    return "open_day: integer expected";
            return null;
        };

        /**
         * Creates a SC_TimeNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_TimeNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_TimeNotify} SC_TimeNotify
         */
        SC_TimeNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_TimeNotify)
                return object;
            var message = new $root.m_proto.SC_TimeNotify();
            if (object.create_day != null)
                message.create_day = object.create_day >>> 0;
            if (object.open_day != null)
                message.open_day = object.open_day >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_TimeNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_TimeNotify
         * @static
         * @param {m_proto.SC_TimeNotify} message SC_TimeNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_TimeNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.create_day = 0;
                object.open_day = 0;
            }
            if (message.create_day != null && message.hasOwnProperty("create_day"))
                object.create_day = message.create_day;
            if (message.open_day != null && message.hasOwnProperty("open_day"))
                object.open_day = message.open_day;
            return object;
        };

        /**
         * Converts this SC_TimeNotify to JSON.
         * @function toJSON
         * @memberof m_proto.SC_TimeNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_TimeNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_TimeNotify
         * @function getTypeUrl
         * @memberof m_proto.SC_TimeNotify
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_TimeNotify.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_TimeNotify";
        };

        return SC_TimeNotify;
    })();

    m_proto.SC_KickNotify = (function() {

        /**
         * Properties of a SC_KickNotify.
         * @memberof m_proto
         * @interface ISC_KickNotify
         * @property {number|null} [reason] SC_KickNotify reason
         * @property {string|null} [prompt] SC_KickNotify prompt
         */

        /**
         * Constructs a new SC_KickNotify.
         * @memberof m_proto
         * @classdesc Represents a SC_KickNotify.
         * @implements ISC_KickNotify
         * @constructor
         * @param {m_proto.ISC_KickNotify=} [properties] Properties to set
         */
        function SC_KickNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_KickNotify reason.
         * @member {number} reason
         * @memberof m_proto.SC_KickNotify
         * @instance
         */
        SC_KickNotify.prototype.reason = 0;

        /**
         * SC_KickNotify prompt.
         * @member {string} prompt
         * @memberof m_proto.SC_KickNotify
         * @instance
         */
        SC_KickNotify.prototype.prompt = "";

        /**
         * Creates a new SC_KickNotify instance using the specified properties.
         * @function create
         * @memberof m_proto.SC_KickNotify
         * @static
         * @param {m_proto.ISC_KickNotify=} [properties] Properties to set
         * @returns {m_proto.SC_KickNotify} SC_KickNotify instance
         */
        SC_KickNotify.create = function create(properties) {
            return new SC_KickNotify(properties);
        };

        /**
         * Encodes the specified SC_KickNotify message. Does not implicitly {@link m_proto.SC_KickNotify.verify|verify} messages.
         * @function encode
         * @memberof m_proto.SC_KickNotify
         * @static
         * @param {m_proto.ISC_KickNotify} message SC_KickNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_KickNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.reason);
            if (message.prompt != null && Object.hasOwnProperty.call(message, "prompt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.prompt);
            return writer;
        };

        /**
         * Encodes the specified SC_KickNotify message, length delimited. Does not implicitly {@link m_proto.SC_KickNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof m_proto.SC_KickNotify
         * @static
         * @param {m_proto.ISC_KickNotify} message SC_KickNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_KickNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_KickNotify message from the specified reader or buffer.
         * @function decode
         * @memberof m_proto.SC_KickNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {m_proto.SC_KickNotify} SC_KickNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_KickNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.m_proto.SC_KickNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.reason = reader.uint32();
                        break;
                    }
                case 2: {
                        message.prompt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_KickNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof m_proto.SC_KickNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {m_proto.SC_KickNotify} SC_KickNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_KickNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_KickNotify message.
         * @function verify
         * @memberof m_proto.SC_KickNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_KickNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            if (message.prompt != null && message.hasOwnProperty("prompt"))
                if (!$util.isString(message.prompt))
                    return "prompt: string expected";
            return null;
        };

        /**
         * Creates a SC_KickNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof m_proto.SC_KickNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {m_proto.SC_KickNotify} SC_KickNotify
         */
        SC_KickNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.m_proto.SC_KickNotify)
                return object;
            var message = new $root.m_proto.SC_KickNotify();
            if (object.reason != null)
                message.reason = object.reason >>> 0;
            if (object.prompt != null)
                message.prompt = String(object.prompt);
            return message;
        };

        /**
         * Creates a plain object from a SC_KickNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof m_proto.SC_KickNotify
         * @static
         * @param {m_proto.SC_KickNotify} message SC_KickNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_KickNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reason = 0;
                object.prompt = "";
            }
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            if (message.prompt != null && message.hasOwnProperty("prompt"))
                object.prompt = message.prompt;
            return object;
        };

        /**
         * Converts this SC_KickNotify to JSON.
         * @function toJSON
         * @memberof m_proto.SC_KickNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_KickNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SC_KickNotify
         * @function getTypeUrl
         * @memberof m_proto.SC_KickNotify
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SC_KickNotify.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/m_proto.SC_KickNotify";
        };

        return SC_KickNotify;
    })();

    return m_proto;
})();

module.exports = $root;
