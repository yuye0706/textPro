// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Namespace m_proto. */
export namespace m_proto {

    /** Properties of a BagItem. */
    interface IBagItem {

        /** BagItem bag_id */
        bag_id?: (number|Long|null);

        /** BagItem item_id */
        item_id?: (number|null);

        /** BagItem item_count */
        item_count?: (number|null);

        /** BagItem bag_type */
        bag_type?: (number|null);

        /** BagItem page */
        page?: (number|null);
    }

    /** Represents a BagItem. */
    class BagItem implements IBagItem {

        /**
         * Constructs a new BagItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.IBagItem);

        /** BagItem bag_id. */
        public bag_id: (number|Long);

        /** BagItem item_id. */
        public item_id: number;

        /** BagItem item_count. */
        public item_count: number;

        /** BagItem bag_type. */
        public bag_type: number;

        /** BagItem page. */
        public page: number;

        /**
         * Creates a new BagItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BagItem instance
         */
        public static create(properties?: m_proto.IBagItem): m_proto.BagItem;

        /**
         * Encodes the specified BagItem message. Does not implicitly {@link m_proto.BagItem.verify|verify} messages.
         * @param message BagItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.IBagItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BagItem message, length delimited. Does not implicitly {@link m_proto.BagItem.verify|verify} messages.
         * @param message BagItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.IBagItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BagItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BagItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.BagItem;

        /**
         * Decodes a BagItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BagItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.BagItem;

        /**
         * Verifies a BagItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BagItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BagItem
         */
        public static fromObject(object: { [k: string]: any }): m_proto.BagItem;

        /**
         * Creates a plain object from a BagItem message. Also converts values to other types if specified.
         * @param message BagItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.BagItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BagItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BagItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_GetBagList. */
    interface ICS_GetBagList {

        /** CS_GetBagList bag_type */
        bag_type?: (number|null);
    }

    /** Represents a CS_GetBagList. */
    class CS_GetBagList implements ICS_GetBagList {

        /**
         * Constructs a new CS_GetBagList.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_GetBagList);

        /** CS_GetBagList bag_type. */
        public bag_type: number;

        /**
         * Creates a new CS_GetBagList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_GetBagList instance
         */
        public static create(properties?: m_proto.ICS_GetBagList): m_proto.CS_GetBagList;

        /**
         * Encodes the specified CS_GetBagList message. Does not implicitly {@link m_proto.CS_GetBagList.verify|verify} messages.
         * @param message CS_GetBagList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_GetBagList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_GetBagList message, length delimited. Does not implicitly {@link m_proto.CS_GetBagList.verify|verify} messages.
         * @param message CS_GetBagList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_GetBagList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_GetBagList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_GetBagList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_GetBagList;

        /**
         * Decodes a CS_GetBagList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_GetBagList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_GetBagList;

        /**
         * Verifies a CS_GetBagList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_GetBagList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_GetBagList
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_GetBagList;

        /**
         * Creates a plain object from a CS_GetBagList message. Also converts values to other types if specified.
         * @param message CS_GetBagList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_GetBagList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_GetBagList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_GetBagList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_GetBagList. */
    interface ISC_GetBagList {

        /** SC_GetBagList err_code */
        err_code?: (number|null);

        /** SC_GetBagList bag_type */
        bag_type?: (number|null);

        /** SC_GetBagList items */
        items?: (m_proto.IBagItem[]|null);
    }

    /** Represents a SC_GetBagList. */
    class SC_GetBagList implements ISC_GetBagList {

        /**
         * Constructs a new SC_GetBagList.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_GetBagList);

        /** SC_GetBagList err_code. */
        public err_code: number;

        /** SC_GetBagList bag_type. */
        public bag_type: number;

        /** SC_GetBagList items. */
        public items: m_proto.IBagItem[];

        /**
         * Creates a new SC_GetBagList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_GetBagList instance
         */
        public static create(properties?: m_proto.ISC_GetBagList): m_proto.SC_GetBagList;

        /**
         * Encodes the specified SC_GetBagList message. Does not implicitly {@link m_proto.SC_GetBagList.verify|verify} messages.
         * @param message SC_GetBagList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_GetBagList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_GetBagList message, length delimited. Does not implicitly {@link m_proto.SC_GetBagList.verify|verify} messages.
         * @param message SC_GetBagList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_GetBagList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_GetBagList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_GetBagList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_GetBagList;

        /**
         * Decodes a SC_GetBagList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_GetBagList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_GetBagList;

        /**
         * Verifies a SC_GetBagList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_GetBagList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_GetBagList
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_GetBagList;

        /**
         * Creates a plain object from a SC_GetBagList message. Also converts values to other types if specified.
         * @param message SC_GetBagList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_GetBagList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_GetBagList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_GetBagList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_BagWear. */
    interface ICS_BagWear {

        /** CS_BagWear bag_id */
        bag_id?: (number|Long|null);

        /** CS_BagWear item_id */
        item_id?: (number|null);
    }

    /** Represents a CS_BagWear. */
    class CS_BagWear implements ICS_BagWear {

        /**
         * Constructs a new CS_BagWear.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_BagWear);

        /** CS_BagWear bag_id. */
        public bag_id: (number|Long);

        /** CS_BagWear item_id. */
        public item_id: number;

        /**
         * Creates a new CS_BagWear instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_BagWear instance
         */
        public static create(properties?: m_proto.ICS_BagWear): m_proto.CS_BagWear;

        /**
         * Encodes the specified CS_BagWear message. Does not implicitly {@link m_proto.CS_BagWear.verify|verify} messages.
         * @param message CS_BagWear message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_BagWear, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_BagWear message, length delimited. Does not implicitly {@link m_proto.CS_BagWear.verify|verify} messages.
         * @param message CS_BagWear message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_BagWear, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_BagWear message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_BagWear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_BagWear;

        /**
         * Decodes a CS_BagWear message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_BagWear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_BagWear;

        /**
         * Verifies a CS_BagWear message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_BagWear message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_BagWear
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_BagWear;

        /**
         * Creates a plain object from a CS_BagWear message. Also converts values to other types if specified.
         * @param message CS_BagWear
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_BagWear, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_BagWear to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_BagWear
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_BagWear. */
    interface ISC_BagWear {

        /** SC_BagWear err_code */
        err_code?: (number|null);
    }

    /** Represents a SC_BagWear. */
    class SC_BagWear implements ISC_BagWear {

        /**
         * Constructs a new SC_BagWear.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_BagWear);

        /** SC_BagWear err_code. */
        public err_code: number;

        /**
         * Creates a new SC_BagWear instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_BagWear instance
         */
        public static create(properties?: m_proto.ISC_BagWear): m_proto.SC_BagWear;

        /**
         * Encodes the specified SC_BagWear message. Does not implicitly {@link m_proto.SC_BagWear.verify|verify} messages.
         * @param message SC_BagWear message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_BagWear, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_BagWear message, length delimited. Does not implicitly {@link m_proto.SC_BagWear.verify|verify} messages.
         * @param message SC_BagWear message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_BagWear, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_BagWear message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_BagWear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_BagWear;

        /**
         * Decodes a SC_BagWear message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_BagWear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_BagWear;

        /**
         * Verifies a SC_BagWear message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_BagWear message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_BagWear
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_BagWear;

        /**
         * Creates a plain object from a SC_BagWear message. Also converts values to other types if specified.
         * @param message SC_BagWear
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_BagWear, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_BagWear to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_BagWear
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_BagUseItem. */
    interface ICS_BagUseItem {

        /** CS_BagUseItem item_id */
        item_id?: (number|null);

        /** CS_BagUseItem item_count */
        item_count?: (number|null);
    }

    /** Represents a CS_BagUseItem. */
    class CS_BagUseItem implements ICS_BagUseItem {

        /**
         * Constructs a new CS_BagUseItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_BagUseItem);

        /** CS_BagUseItem item_id. */
        public item_id: number;

        /** CS_BagUseItem item_count. */
        public item_count: number;

        /**
         * Creates a new CS_BagUseItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_BagUseItem instance
         */
        public static create(properties?: m_proto.ICS_BagUseItem): m_proto.CS_BagUseItem;

        /**
         * Encodes the specified CS_BagUseItem message. Does not implicitly {@link m_proto.CS_BagUseItem.verify|verify} messages.
         * @param message CS_BagUseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_BagUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_BagUseItem message, length delimited. Does not implicitly {@link m_proto.CS_BagUseItem.verify|verify} messages.
         * @param message CS_BagUseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_BagUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_BagUseItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_BagUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_BagUseItem;

        /**
         * Decodes a CS_BagUseItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_BagUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_BagUseItem;

        /**
         * Verifies a CS_BagUseItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_BagUseItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_BagUseItem
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_BagUseItem;

        /**
         * Creates a plain object from a CS_BagUseItem message. Also converts values to other types if specified.
         * @param message CS_BagUseItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_BagUseItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_BagUseItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_BagUseItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_BagUseItem. */
    interface ISC_BagUseItem {

        /** SC_BagUseItem err_code */
        err_code?: (number|null);
    }

    /** Represents a SC_BagUseItem. */
    class SC_BagUseItem implements ISC_BagUseItem {

        /**
         * Constructs a new SC_BagUseItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_BagUseItem);

        /** SC_BagUseItem err_code. */
        public err_code: number;

        /**
         * Creates a new SC_BagUseItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_BagUseItem instance
         */
        public static create(properties?: m_proto.ISC_BagUseItem): m_proto.SC_BagUseItem;

        /**
         * Encodes the specified SC_BagUseItem message. Does not implicitly {@link m_proto.SC_BagUseItem.verify|verify} messages.
         * @param message SC_BagUseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_BagUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_BagUseItem message, length delimited. Does not implicitly {@link m_proto.SC_BagUseItem.verify|verify} messages.
         * @param message SC_BagUseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_BagUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_BagUseItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_BagUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_BagUseItem;

        /**
         * Decodes a SC_BagUseItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_BagUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_BagUseItem;

        /**
         * Verifies a SC_BagUseItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_BagUseItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_BagUseItem
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_BagUseItem;

        /**
         * Creates a plain object from a SC_BagUseItem message. Also converts values to other types if specified.
         * @param message SC_BagUseItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_BagUseItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_BagUseItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_BagUseItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_BagStoreDeposit. */
    interface ICS_BagStoreDeposit {

        /** CS_BagStoreDeposit bag_id */
        bag_id?: (number|Long|null);

        /** CS_BagStoreDeposit page */
        page?: (number|null);
    }

    /** Represents a CS_BagStoreDeposit. */
    class CS_BagStoreDeposit implements ICS_BagStoreDeposit {

        /**
         * Constructs a new CS_BagStoreDeposit.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_BagStoreDeposit);

        /** CS_BagStoreDeposit bag_id. */
        public bag_id: (number|Long);

        /** CS_BagStoreDeposit page. */
        public page: number;

        /**
         * Creates a new CS_BagStoreDeposit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_BagStoreDeposit instance
         */
        public static create(properties?: m_proto.ICS_BagStoreDeposit): m_proto.CS_BagStoreDeposit;

        /**
         * Encodes the specified CS_BagStoreDeposit message. Does not implicitly {@link m_proto.CS_BagStoreDeposit.verify|verify} messages.
         * @param message CS_BagStoreDeposit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_BagStoreDeposit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_BagStoreDeposit message, length delimited. Does not implicitly {@link m_proto.CS_BagStoreDeposit.verify|verify} messages.
         * @param message CS_BagStoreDeposit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_BagStoreDeposit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_BagStoreDeposit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_BagStoreDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_BagStoreDeposit;

        /**
         * Decodes a CS_BagStoreDeposit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_BagStoreDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_BagStoreDeposit;

        /**
         * Verifies a CS_BagStoreDeposit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_BagStoreDeposit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_BagStoreDeposit
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_BagStoreDeposit;

        /**
         * Creates a plain object from a CS_BagStoreDeposit message. Also converts values to other types if specified.
         * @param message CS_BagStoreDeposit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_BagStoreDeposit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_BagStoreDeposit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_BagStoreDeposit
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_BagStoreDeposit. */
    interface ISC_BagStoreDeposit {

        /** SC_BagStoreDeposit err_code */
        err_code?: (number|null);
    }

    /** Represents a SC_BagStoreDeposit. */
    class SC_BagStoreDeposit implements ISC_BagStoreDeposit {

        /**
         * Constructs a new SC_BagStoreDeposit.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_BagStoreDeposit);

        /** SC_BagStoreDeposit err_code. */
        public err_code: number;

        /**
         * Creates a new SC_BagStoreDeposit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_BagStoreDeposit instance
         */
        public static create(properties?: m_proto.ISC_BagStoreDeposit): m_proto.SC_BagStoreDeposit;

        /**
         * Encodes the specified SC_BagStoreDeposit message. Does not implicitly {@link m_proto.SC_BagStoreDeposit.verify|verify} messages.
         * @param message SC_BagStoreDeposit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_BagStoreDeposit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_BagStoreDeposit message, length delimited. Does not implicitly {@link m_proto.SC_BagStoreDeposit.verify|verify} messages.
         * @param message SC_BagStoreDeposit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_BagStoreDeposit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_BagStoreDeposit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_BagStoreDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_BagStoreDeposit;

        /**
         * Decodes a SC_BagStoreDeposit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_BagStoreDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_BagStoreDeposit;

        /**
         * Verifies a SC_BagStoreDeposit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_BagStoreDeposit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_BagStoreDeposit
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_BagStoreDeposit;

        /**
         * Creates a plain object from a SC_BagStoreDeposit message. Also converts values to other types if specified.
         * @param message SC_BagStoreDeposit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_BagStoreDeposit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_BagStoreDeposit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_BagStoreDeposit
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_SoulForge. */
    interface ICS_SoulForge {

        /** CS_SoulForge bag_id */
        bag_id?: (number|Long|null);
    }

    /** Represents a CS_SoulForge. */
    class CS_SoulForge implements ICS_SoulForge {

        /**
         * Constructs a new CS_SoulForge.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_SoulForge);

        /** CS_SoulForge bag_id. */
        public bag_id: (number|Long);

        /**
         * Creates a new CS_SoulForge instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_SoulForge instance
         */
        public static create(properties?: m_proto.ICS_SoulForge): m_proto.CS_SoulForge;

        /**
         * Encodes the specified CS_SoulForge message. Does not implicitly {@link m_proto.CS_SoulForge.verify|verify} messages.
         * @param message CS_SoulForge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_SoulForge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_SoulForge message, length delimited. Does not implicitly {@link m_proto.CS_SoulForge.verify|verify} messages.
         * @param message CS_SoulForge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_SoulForge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_SoulForge message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_SoulForge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_SoulForge;

        /**
         * Decodes a CS_SoulForge message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_SoulForge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_SoulForge;

        /**
         * Verifies a CS_SoulForge message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_SoulForge message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_SoulForge
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_SoulForge;

        /**
         * Creates a plain object from a CS_SoulForge message. Also converts values to other types if specified.
         * @param message CS_SoulForge
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_SoulForge, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_SoulForge to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_SoulForge
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_SoulForge. */
    interface ISC_SoulForge {

        /** SC_SoulForge err_code */
        err_code?: (number|null);
    }

    /** Represents a SC_SoulForge. */
    class SC_SoulForge implements ISC_SoulForge {

        /**
         * Constructs a new SC_SoulForge.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_SoulForge);

        /** SC_SoulForge err_code. */
        public err_code: number;

        /**
         * Creates a new SC_SoulForge instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_SoulForge instance
         */
        public static create(properties?: m_proto.ISC_SoulForge): m_proto.SC_SoulForge;

        /**
         * Encodes the specified SC_SoulForge message. Does not implicitly {@link m_proto.SC_SoulForge.verify|verify} messages.
         * @param message SC_SoulForge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_SoulForge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_SoulForge message, length delimited. Does not implicitly {@link m_proto.SC_SoulForge.verify|verify} messages.
         * @param message SC_SoulForge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_SoulForge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_SoulForge message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_SoulForge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_SoulForge;

        /**
         * Decodes a SC_SoulForge message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_SoulForge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_SoulForge;

        /**
         * Verifies a SC_SoulForge message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_SoulForge message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_SoulForge
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_SoulForge;

        /**
         * Creates a plain object from a SC_SoulForge message. Also converts values to other types if specified.
         * @param message SC_SoulForge
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_SoulForge, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_SoulForge to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_SoulForge
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_BagItemListNtf. */
    interface ISC_BagItemListNtf {

        /** SC_BagItemListNtf items */
        items?: (m_proto.IBagItem[]|null);
    }

    /** Represents a SC_BagItemListNtf. */
    class SC_BagItemListNtf implements ISC_BagItemListNtf {

        /**
         * Constructs a new SC_BagItemListNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_BagItemListNtf);

        /** SC_BagItemListNtf items. */
        public items: m_proto.IBagItem[];

        /**
         * Creates a new SC_BagItemListNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_BagItemListNtf instance
         */
        public static create(properties?: m_proto.ISC_BagItemListNtf): m_proto.SC_BagItemListNtf;

        /**
         * Encodes the specified SC_BagItemListNtf message. Does not implicitly {@link m_proto.SC_BagItemListNtf.verify|verify} messages.
         * @param message SC_BagItemListNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_BagItemListNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_BagItemListNtf message, length delimited. Does not implicitly {@link m_proto.SC_BagItemListNtf.verify|verify} messages.
         * @param message SC_BagItemListNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_BagItemListNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_BagItemListNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_BagItemListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_BagItemListNtf;

        /**
         * Decodes a SC_BagItemListNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_BagItemListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_BagItemListNtf;

        /**
         * Verifies a SC_BagItemListNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_BagItemListNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_BagItemListNtf
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_BagItemListNtf;

        /**
         * Creates a plain object from a SC_BagItemListNtf message. Also converts values to other types if specified.
         * @param message SC_BagItemListNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_BagItemListNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_BagItemListNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_BagItemListNtf
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_BagItemListNtf2. */
    interface ISC_BagItemListNtf2 {

        /** SC_BagItemListNtf2 items */
        items?: (m_proto.IBagItem[]|null);
    }

    /** Represents a SC_BagItemListNtf2. */
    class SC_BagItemListNtf2 implements ISC_BagItemListNtf2 {

        /**
         * Constructs a new SC_BagItemListNtf2.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_BagItemListNtf2);

        /** SC_BagItemListNtf2 items. */
        public items: m_proto.IBagItem[];

        /**
         * Creates a new SC_BagItemListNtf2 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_BagItemListNtf2 instance
         */
        public static create(properties?: m_proto.ISC_BagItemListNtf2): m_proto.SC_BagItemListNtf2;

        /**
         * Encodes the specified SC_BagItemListNtf2 message. Does not implicitly {@link m_proto.SC_BagItemListNtf2.verify|verify} messages.
         * @param message SC_BagItemListNtf2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_BagItemListNtf2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_BagItemListNtf2 message, length delimited. Does not implicitly {@link m_proto.SC_BagItemListNtf2.verify|verify} messages.
         * @param message SC_BagItemListNtf2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_BagItemListNtf2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_BagItemListNtf2 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_BagItemListNtf2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_BagItemListNtf2;

        /**
         * Decodes a SC_BagItemListNtf2 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_BagItemListNtf2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_BagItemListNtf2;

        /**
         * Verifies a SC_BagItemListNtf2 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_BagItemListNtf2 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_BagItemListNtf2
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_BagItemListNtf2;

        /**
         * Creates a plain object from a SC_BagItemListNtf2 message. Also converts values to other types if specified.
         * @param message SC_BagItemListNtf2
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_BagItemListNtf2, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_BagItemListNtf2 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_BagItemListNtf2
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_BagIdListNtf. */
    interface ISC_BagIdListNtf {

        /** SC_BagIdListNtf bag_ids */
        bag_ids?: ((number|Long)[]|null);
    }

    /** Represents a SC_BagIdListNtf. */
    class SC_BagIdListNtf implements ISC_BagIdListNtf {

        /**
         * Constructs a new SC_BagIdListNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_BagIdListNtf);

        /** SC_BagIdListNtf bag_ids. */
        public bag_ids: (number|Long)[];

        /**
         * Creates a new SC_BagIdListNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_BagIdListNtf instance
         */
        public static create(properties?: m_proto.ISC_BagIdListNtf): m_proto.SC_BagIdListNtf;

        /**
         * Encodes the specified SC_BagIdListNtf message. Does not implicitly {@link m_proto.SC_BagIdListNtf.verify|verify} messages.
         * @param message SC_BagIdListNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_BagIdListNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_BagIdListNtf message, length delimited. Does not implicitly {@link m_proto.SC_BagIdListNtf.verify|verify} messages.
         * @param message SC_BagIdListNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_BagIdListNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_BagIdListNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_BagIdListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_BagIdListNtf;

        /**
         * Decodes a SC_BagIdListNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_BagIdListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_BagIdListNtf;

        /**
         * Verifies a SC_BagIdListNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_BagIdListNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_BagIdListNtf
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_BagIdListNtf;

        /**
         * Creates a plain object from a SC_BagIdListNtf message. Also converts values to other types if specified.
         * @param message SC_BagIdListNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_BagIdListNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_BagIdListNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_BagIdListNtf
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_BagIdListNtf2. */
    interface ISC_BagIdListNtf2 {

        /** SC_BagIdListNtf2 bag_ids */
        bag_ids?: ((number|Long)[]|null);
    }

    /** Represents a SC_BagIdListNtf2. */
    class SC_BagIdListNtf2 implements ISC_BagIdListNtf2 {

        /**
         * Constructs a new SC_BagIdListNtf2.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_BagIdListNtf2);

        /** SC_BagIdListNtf2 bag_ids. */
        public bag_ids: (number|Long)[];

        /**
         * Creates a new SC_BagIdListNtf2 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_BagIdListNtf2 instance
         */
        public static create(properties?: m_proto.ISC_BagIdListNtf2): m_proto.SC_BagIdListNtf2;

        /**
         * Encodes the specified SC_BagIdListNtf2 message. Does not implicitly {@link m_proto.SC_BagIdListNtf2.verify|verify} messages.
         * @param message SC_BagIdListNtf2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_BagIdListNtf2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_BagIdListNtf2 message, length delimited. Does not implicitly {@link m_proto.SC_BagIdListNtf2.verify|verify} messages.
         * @param message SC_BagIdListNtf2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_BagIdListNtf2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_BagIdListNtf2 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_BagIdListNtf2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_BagIdListNtf2;

        /**
         * Decodes a SC_BagIdListNtf2 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_BagIdListNtf2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_BagIdListNtf2;

        /**
         * Verifies a SC_BagIdListNtf2 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_BagIdListNtf2 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_BagIdListNtf2
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_BagIdListNtf2;

        /**
         * Creates a plain object from a SC_BagIdListNtf2 message. Also converts values to other types if specified.
         * @param message SC_BagIdListNtf2
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_BagIdListNtf2, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_BagIdListNtf2 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_BagIdListNtf2
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_BagPageListNtf. */
    interface ISC_BagPageListNtf {

        /** SC_BagPageListNtf pages */
        pages?: (number[]|null);
    }

    /** Represents a SC_BagPageListNtf. */
    class SC_BagPageListNtf implements ISC_BagPageListNtf {

        /**
         * Constructs a new SC_BagPageListNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_BagPageListNtf);

        /** SC_BagPageListNtf pages. */
        public pages: number[];

        /**
         * Creates a new SC_BagPageListNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_BagPageListNtf instance
         */
        public static create(properties?: m_proto.ISC_BagPageListNtf): m_proto.SC_BagPageListNtf;

        /**
         * Encodes the specified SC_BagPageListNtf message. Does not implicitly {@link m_proto.SC_BagPageListNtf.verify|verify} messages.
         * @param message SC_BagPageListNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_BagPageListNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_BagPageListNtf message, length delimited. Does not implicitly {@link m_proto.SC_BagPageListNtf.verify|verify} messages.
         * @param message SC_BagPageListNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_BagPageListNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_BagPageListNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_BagPageListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_BagPageListNtf;

        /**
         * Decodes a SC_BagPageListNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_BagPageListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_BagPageListNtf;

        /**
         * Verifies a SC_BagPageListNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_BagPageListNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_BagPageListNtf
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_BagPageListNtf;

        /**
         * Creates a plain object from a SC_BagPageListNtf message. Also converts values to other types if specified.
         * @param message SC_BagPageListNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_BagPageListNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_BagPageListNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_BagPageListNtf
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_BagSingleIdNtf. */
    interface ISC_BagSingleIdNtf {

        /** SC_BagSingleIdNtf bag_id */
        bag_id?: (number|Long|null);
    }

    /** Represents a SC_BagSingleIdNtf. */
    class SC_BagSingleIdNtf implements ISC_BagSingleIdNtf {

        /**
         * Constructs a new SC_BagSingleIdNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_BagSingleIdNtf);

        /** SC_BagSingleIdNtf bag_id. */
        public bag_id: (number|Long);

        /**
         * Creates a new SC_BagSingleIdNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_BagSingleIdNtf instance
         */
        public static create(properties?: m_proto.ISC_BagSingleIdNtf): m_proto.SC_BagSingleIdNtf;

        /**
         * Encodes the specified SC_BagSingleIdNtf message. Does not implicitly {@link m_proto.SC_BagSingleIdNtf.verify|verify} messages.
         * @param message SC_BagSingleIdNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_BagSingleIdNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_BagSingleIdNtf message, length delimited. Does not implicitly {@link m_proto.SC_BagSingleIdNtf.verify|verify} messages.
         * @param message SC_BagSingleIdNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_BagSingleIdNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_BagSingleIdNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_BagSingleIdNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_BagSingleIdNtf;

        /**
         * Decodes a SC_BagSingleIdNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_BagSingleIdNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_BagSingleIdNtf;

        /**
         * Verifies a SC_BagSingleIdNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_BagSingleIdNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_BagSingleIdNtf
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_BagSingleIdNtf;

        /**
         * Creates a plain object from a SC_BagSingleIdNtf message. Also converts values to other types if specified.
         * @param message SC_BagSingleIdNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_BagSingleIdNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_BagSingleIdNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_BagSingleIdNtf
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_BagPartNtf. */
    interface ISC_BagPartNtf {

        /** SC_BagPartNtf part */
        part?: (number|null);
    }

    /** Represents a SC_BagPartNtf. */
    class SC_BagPartNtf implements ISC_BagPartNtf {

        /**
         * Constructs a new SC_BagPartNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_BagPartNtf);

        /** SC_BagPartNtf part. */
        public part: number;

        /**
         * Creates a new SC_BagPartNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_BagPartNtf instance
         */
        public static create(properties?: m_proto.ISC_BagPartNtf): m_proto.SC_BagPartNtf;

        /**
         * Encodes the specified SC_BagPartNtf message. Does not implicitly {@link m_proto.SC_BagPartNtf.verify|verify} messages.
         * @param message SC_BagPartNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_BagPartNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_BagPartNtf message, length delimited. Does not implicitly {@link m_proto.SC_BagPartNtf.verify|verify} messages.
         * @param message SC_BagPartNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_BagPartNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_BagPartNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_BagPartNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_BagPartNtf;

        /**
         * Decodes a SC_BagPartNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_BagPartNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_BagPartNtf;

        /**
         * Verifies a SC_BagPartNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_BagPartNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_BagPartNtf
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_BagPartNtf;

        /**
         * Creates a plain object from a SC_BagPartNtf message. Also converts values to other types if specified.
         * @param message SC_BagPartNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_BagPartNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_BagPartNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_BagPartNtf
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_BagPartNtf2. */
    interface ISC_BagPartNtf2 {

        /** SC_BagPartNtf2 part */
        part?: (number|null);
    }

    /** Represents a SC_BagPartNtf2. */
    class SC_BagPartNtf2 implements ISC_BagPartNtf2 {

        /**
         * Constructs a new SC_BagPartNtf2.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_BagPartNtf2);

        /** SC_BagPartNtf2 part. */
        public part: number;

        /**
         * Creates a new SC_BagPartNtf2 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_BagPartNtf2 instance
         */
        public static create(properties?: m_proto.ISC_BagPartNtf2): m_proto.SC_BagPartNtf2;

        /**
         * Encodes the specified SC_BagPartNtf2 message. Does not implicitly {@link m_proto.SC_BagPartNtf2.verify|verify} messages.
         * @param message SC_BagPartNtf2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_BagPartNtf2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_BagPartNtf2 message, length delimited. Does not implicitly {@link m_proto.SC_BagPartNtf2.verify|verify} messages.
         * @param message SC_BagPartNtf2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_BagPartNtf2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_BagPartNtf2 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_BagPartNtf2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_BagPartNtf2;

        /**
         * Decodes a SC_BagPartNtf2 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_BagPartNtf2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_BagPartNtf2;

        /**
         * Verifies a SC_BagPartNtf2 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_BagPartNtf2 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_BagPartNtf2
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_BagPartNtf2;

        /**
         * Creates a plain object from a SC_BagPartNtf2 message. Also converts values to other types if specified.
         * @param message SC_BagPartNtf2
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_BagPartNtf2, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_BagPartNtf2 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_BagPartNtf2
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_BagTipNtf. */
    interface ISC_BagTipNtf {

        /** SC_BagTipNtf message */
        message?: (string|null);
    }

    /** Represents a SC_BagTipNtf. */
    class SC_BagTipNtf implements ISC_BagTipNtf {

        /**
         * Constructs a new SC_BagTipNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_BagTipNtf);

        /** SC_BagTipNtf message. */
        public message: string;

        /**
         * Creates a new SC_BagTipNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_BagTipNtf instance
         */
        public static create(properties?: m_proto.ISC_BagTipNtf): m_proto.SC_BagTipNtf;

        /**
         * Encodes the specified SC_BagTipNtf message. Does not implicitly {@link m_proto.SC_BagTipNtf.verify|verify} messages.
         * @param message SC_BagTipNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_BagTipNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_BagTipNtf message, length delimited. Does not implicitly {@link m_proto.SC_BagTipNtf.verify|verify} messages.
         * @param message SC_BagTipNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_BagTipNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_BagTipNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_BagTipNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_BagTipNtf;

        /**
         * Decodes a SC_BagTipNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_BagTipNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_BagTipNtf;

        /**
         * Verifies a SC_BagTipNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_BagTipNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_BagTipNtf
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_BagTipNtf;

        /**
         * Creates a plain object from a SC_BagTipNtf message. Also converts values to other types if specified.
         * @param message SC_BagTipNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_BagTipNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_BagTipNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_BagTipNtf
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerResource. */
    interface IPlayerResource {

        /** PlayerResource id */
        id?: (number|null);

        /** PlayerResource count */
        count?: (number|null);
    }

    /** Represents a PlayerResource. */
    class PlayerResource implements IPlayerResource {

        /**
         * Constructs a new PlayerResource.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.IPlayerResource);

        /** PlayerResource id. */
        public id: number;

        /** PlayerResource count. */
        public count: number;

        /**
         * Creates a new PlayerResource instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerResource instance
         */
        public static create(properties?: m_proto.IPlayerResource): m_proto.PlayerResource;

        /**
         * Encodes the specified PlayerResource message. Does not implicitly {@link m_proto.PlayerResource.verify|verify} messages.
         * @param message PlayerResource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.IPlayerResource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerResource message, length delimited. Does not implicitly {@link m_proto.PlayerResource.verify|verify} messages.
         * @param message PlayerResource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.IPlayerResource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerResource message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerResource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.PlayerResource;

        /**
         * Decodes a PlayerResource message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerResource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.PlayerResource;

        /**
         * Verifies a PlayerResource message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerResource message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerResource
         */
        public static fromObject(object: { [k: string]: any }): m_proto.PlayerResource;

        /**
         * Creates a plain object from a PlayerResource message. Also converts values to other types if specified.
         * @param message PlayerResource
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.PlayerResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerResource to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerResource
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_VerifyAccount. */
    interface ICS_VerifyAccount {

        /** CS_VerifyAccount uid */
        uid?: (string|null);

        /** CS_VerifyAccount sessionid */
        sessionid?: (string|null);

        /** CS_VerifyAccount data */
        data?: (string|null);

        /** CS_VerifyAccount channel_type */
        channel_type?: (number|null);

        /** CS_VerifyAccount sys_type */
        sys_type?: (number|null);
    }

    /** Represents a CS_VerifyAccount. */
    class CS_VerifyAccount implements ICS_VerifyAccount {

        /**
         * Constructs a new CS_VerifyAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_VerifyAccount);

        /** CS_VerifyAccount uid. */
        public uid: string;

        /** CS_VerifyAccount sessionid. */
        public sessionid: string;

        /** CS_VerifyAccount data. */
        public data: string;

        /** CS_VerifyAccount channel_type. */
        public channel_type: number;

        /** CS_VerifyAccount sys_type. */
        public sys_type: number;

        /**
         * Creates a new CS_VerifyAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_VerifyAccount instance
         */
        public static create(properties?: m_proto.ICS_VerifyAccount): m_proto.CS_VerifyAccount;

        /**
         * Encodes the specified CS_VerifyAccount message. Does not implicitly {@link m_proto.CS_VerifyAccount.verify|verify} messages.
         * @param message CS_VerifyAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_VerifyAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_VerifyAccount message, length delimited. Does not implicitly {@link m_proto.CS_VerifyAccount.verify|verify} messages.
         * @param message CS_VerifyAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_VerifyAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_VerifyAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_VerifyAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_VerifyAccount;

        /**
         * Decodes a CS_VerifyAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_VerifyAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_VerifyAccount;

        /**
         * Verifies a CS_VerifyAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_VerifyAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_VerifyAccount
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_VerifyAccount;

        /**
         * Creates a plain object from a CS_VerifyAccount message. Also converts values to other types if specified.
         * @param message CS_VerifyAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_VerifyAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_VerifyAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_VerifyAccount
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_VerifyAccount. */
    interface ISC_VerifyAccount {

        /** SC_VerifyAccount err_code */
        err_code?: (number|null);
    }

    /** Represents a SC_VerifyAccount. */
    class SC_VerifyAccount implements ISC_VerifyAccount {

        /**
         * Constructs a new SC_VerifyAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_VerifyAccount);

        /** SC_VerifyAccount err_code. */
        public err_code: number;

        /**
         * Creates a new SC_VerifyAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_VerifyAccount instance
         */
        public static create(properties?: m_proto.ISC_VerifyAccount): m_proto.SC_VerifyAccount;

        /**
         * Encodes the specified SC_VerifyAccount message. Does not implicitly {@link m_proto.SC_VerifyAccount.verify|verify} messages.
         * @param message SC_VerifyAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_VerifyAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_VerifyAccount message, length delimited. Does not implicitly {@link m_proto.SC_VerifyAccount.verify|verify} messages.
         * @param message SC_VerifyAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_VerifyAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_VerifyAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_VerifyAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_VerifyAccount;

        /**
         * Decodes a SC_VerifyAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_VerifyAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_VerifyAccount;

        /**
         * Verifies a SC_VerifyAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_VerifyAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_VerifyAccount
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_VerifyAccount;

        /**
         * Creates a plain object from a SC_VerifyAccount message. Also converts values to other types if specified.
         * @param message SC_VerifyAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_VerifyAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_VerifyAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_VerifyAccount
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_IsHasRole. */
    interface ICS_IsHasRole {

        /** CS_IsHasRole account */
        account?: (string|null);

        /** CS_IsHasRole server_id */
        server_id?: (number|null);
    }

    /** Represents a CS_IsHasRole. */
    class CS_IsHasRole implements ICS_IsHasRole {

        /**
         * Constructs a new CS_IsHasRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_IsHasRole);

        /** CS_IsHasRole account. */
        public account: string;

        /** CS_IsHasRole server_id. */
        public server_id: number;

        /**
         * Creates a new CS_IsHasRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_IsHasRole instance
         */
        public static create(properties?: m_proto.ICS_IsHasRole): m_proto.CS_IsHasRole;

        /**
         * Encodes the specified CS_IsHasRole message. Does not implicitly {@link m_proto.CS_IsHasRole.verify|verify} messages.
         * @param message CS_IsHasRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_IsHasRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_IsHasRole message, length delimited. Does not implicitly {@link m_proto.CS_IsHasRole.verify|verify} messages.
         * @param message CS_IsHasRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_IsHasRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_IsHasRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_IsHasRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_IsHasRole;

        /**
         * Decodes a CS_IsHasRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_IsHasRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_IsHasRole;

        /**
         * Verifies a CS_IsHasRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_IsHasRole message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_IsHasRole
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_IsHasRole;

        /**
         * Creates a plain object from a CS_IsHasRole message. Also converts values to other types if specified.
         * @param message CS_IsHasRole
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_IsHasRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_IsHasRole to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_IsHasRole
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_IsHasRole. */
    interface ISC_IsHasRole {

        /** SC_IsHasRole err_code */
        err_code?: (number|null);

        /** SC_IsHasRole is_created */
        is_created?: (boolean|null);
    }

    /** Represents a SC_IsHasRole. */
    class SC_IsHasRole implements ISC_IsHasRole {

        /**
         * Constructs a new SC_IsHasRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_IsHasRole);

        /** SC_IsHasRole err_code. */
        public err_code: number;

        /** SC_IsHasRole is_created. */
        public is_created: boolean;

        /**
         * Creates a new SC_IsHasRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_IsHasRole instance
         */
        public static create(properties?: m_proto.ISC_IsHasRole): m_proto.SC_IsHasRole;

        /**
         * Encodes the specified SC_IsHasRole message. Does not implicitly {@link m_proto.SC_IsHasRole.verify|verify} messages.
         * @param message SC_IsHasRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_IsHasRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_IsHasRole message, length delimited. Does not implicitly {@link m_proto.SC_IsHasRole.verify|verify} messages.
         * @param message SC_IsHasRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_IsHasRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_IsHasRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_IsHasRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_IsHasRole;

        /**
         * Decodes a SC_IsHasRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_IsHasRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_IsHasRole;

        /**
         * Verifies a SC_IsHasRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_IsHasRole message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_IsHasRole
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_IsHasRole;

        /**
         * Creates a plain object from a SC_IsHasRole message. Also converts values to other types if specified.
         * @param message SC_IsHasRole
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_IsHasRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_IsHasRole to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_IsHasRole
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_CreateRole. */
    interface ICS_CreateRole {

        /** CS_CreateRole roleName */
        roleName?: (string|null);

        /** CS_CreateRole site */
        site?: (string|null);

        /** CS_CreateRole career */
        career?: (number|null);
    }

    /** Represents a CS_CreateRole. */
    class CS_CreateRole implements ICS_CreateRole {

        /**
         * Constructs a new CS_CreateRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_CreateRole);

        /** CS_CreateRole roleName. */
        public roleName: string;

        /** CS_CreateRole site. */
        public site: string;

        /** CS_CreateRole career. */
        public career: number;

        /**
         * Creates a new CS_CreateRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_CreateRole instance
         */
        public static create(properties?: m_proto.ICS_CreateRole): m_proto.CS_CreateRole;

        /**
         * Encodes the specified CS_CreateRole message. Does not implicitly {@link m_proto.CS_CreateRole.verify|verify} messages.
         * @param message CS_CreateRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_CreateRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_CreateRole message, length delimited. Does not implicitly {@link m_proto.CS_CreateRole.verify|verify} messages.
         * @param message CS_CreateRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_CreateRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_CreateRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_CreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_CreateRole;

        /**
         * Decodes a CS_CreateRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_CreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_CreateRole;

        /**
         * Verifies a CS_CreateRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_CreateRole message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_CreateRole
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_CreateRole;

        /**
         * Creates a plain object from a CS_CreateRole message. Also converts values to other types if specified.
         * @param message CS_CreateRole
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_CreateRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_CreateRole to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_CreateRole
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_CreateRole. */
    interface ISC_CreateRole {

        /** SC_CreateRole err_code */
        err_code?: (number|null);

        /** SC_CreateRole role_id */
        role_id?: (number|Long|null);

        /** SC_CreateRole roleName */
        roleName?: (string|null);
    }

    /** Represents a SC_CreateRole. */
    class SC_CreateRole implements ISC_CreateRole {

        /**
         * Constructs a new SC_CreateRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_CreateRole);

        /** SC_CreateRole err_code. */
        public err_code: number;

        /** SC_CreateRole role_id. */
        public role_id: (number|Long);

        /** SC_CreateRole roleName. */
        public roleName: string;

        /**
         * Creates a new SC_CreateRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_CreateRole instance
         */
        public static create(properties?: m_proto.ISC_CreateRole): m_proto.SC_CreateRole;

        /**
         * Encodes the specified SC_CreateRole message. Does not implicitly {@link m_proto.SC_CreateRole.verify|verify} messages.
         * @param message SC_CreateRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_CreateRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_CreateRole message, length delimited. Does not implicitly {@link m_proto.SC_CreateRole.verify|verify} messages.
         * @param message SC_CreateRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_CreateRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_CreateRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_CreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_CreateRole;

        /**
         * Decodes a SC_CreateRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_CreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_CreateRole;

        /**
         * Verifies a SC_CreateRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_CreateRole message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_CreateRole
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_CreateRole;

        /**
         * Creates a plain object from a SC_CreateRole message. Also converts values to other types if specified.
         * @param message SC_CreateRole
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_CreateRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_CreateRole to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_CreateRole
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_EnterGame. */
    interface ICS_EnterGame {

        /** CS_EnterGame site */
        site?: (string|null);
    }

    /** Represents a CS_EnterGame. */
    class CS_EnterGame implements ICS_EnterGame {

        /**
         * Constructs a new CS_EnterGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_EnterGame);

        /** CS_EnterGame site. */
        public site: string;

        /**
         * Creates a new CS_EnterGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_EnterGame instance
         */
        public static create(properties?: m_proto.ICS_EnterGame): m_proto.CS_EnterGame;

        /**
         * Encodes the specified CS_EnterGame message. Does not implicitly {@link m_proto.CS_EnterGame.verify|verify} messages.
         * @param message CS_EnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_EnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_EnterGame message, length delimited. Does not implicitly {@link m_proto.CS_EnterGame.verify|verify} messages.
         * @param message CS_EnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_EnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_EnterGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_EnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_EnterGame;

        /**
         * Decodes a CS_EnterGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_EnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_EnterGame;

        /**
         * Verifies a CS_EnterGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_EnterGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_EnterGame
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_EnterGame;

        /**
         * Creates a plain object from a CS_EnterGame message. Also converts values to other types if specified.
         * @param message CS_EnterGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_EnterGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_EnterGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_EnterGame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_EnterGame. */
    interface ISC_EnterGame {

        /** SC_EnterGame err_code */
        err_code?: (number|null);

        /** SC_EnterGame server_time */
        server_time?: (number|null);

        /** SC_EnterGame token */
        token?: (number|Long|null);

        /** SC_EnterGame create_time */
        create_time?: (number|null);

        /** SC_EnterGame open_time */
        open_time?: (number|null);
    }

    /** Represents a SC_EnterGame. */
    class SC_EnterGame implements ISC_EnterGame {

        /**
         * Constructs a new SC_EnterGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_EnterGame);

        /** SC_EnterGame err_code. */
        public err_code: number;

        /** SC_EnterGame server_time. */
        public server_time: number;

        /** SC_EnterGame token. */
        public token: (number|Long);

        /** SC_EnterGame create_time. */
        public create_time: number;

        /** SC_EnterGame open_time. */
        public open_time: number;

        /**
         * Creates a new SC_EnterGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_EnterGame instance
         */
        public static create(properties?: m_proto.ISC_EnterGame): m_proto.SC_EnterGame;

        /**
         * Encodes the specified SC_EnterGame message. Does not implicitly {@link m_proto.SC_EnterGame.verify|verify} messages.
         * @param message SC_EnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_EnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_EnterGame message, length delimited. Does not implicitly {@link m_proto.SC_EnterGame.verify|verify} messages.
         * @param message SC_EnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_EnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_EnterGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_EnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_EnterGame;

        /**
         * Decodes a SC_EnterGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_EnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_EnterGame;

        /**
         * Verifies a SC_EnterGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_EnterGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_EnterGame
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_EnterGame;

        /**
         * Creates a plain object from a SC_EnterGame message. Also converts values to other types if specified.
         * @param message SC_EnterGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_EnterGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_EnterGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_EnterGame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_Reconnect. */
    interface ICS_Reconnect {

        /** CS_Reconnect token */
        token?: (number|Long|null);
    }

    /** Represents a CS_Reconnect. */
    class CS_Reconnect implements ICS_Reconnect {

        /**
         * Constructs a new CS_Reconnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_Reconnect);

        /** CS_Reconnect token. */
        public token: (number|Long);

        /**
         * Creates a new CS_Reconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_Reconnect instance
         */
        public static create(properties?: m_proto.ICS_Reconnect): m_proto.CS_Reconnect;

        /**
         * Encodes the specified CS_Reconnect message. Does not implicitly {@link m_proto.CS_Reconnect.verify|verify} messages.
         * @param message CS_Reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_Reconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_Reconnect message, length delimited. Does not implicitly {@link m_proto.CS_Reconnect.verify|verify} messages.
         * @param message CS_Reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_Reconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_Reconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_Reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_Reconnect;

        /**
         * Decodes a CS_Reconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_Reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_Reconnect;

        /**
         * Verifies a CS_Reconnect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_Reconnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_Reconnect
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_Reconnect;

        /**
         * Creates a plain object from a CS_Reconnect message. Also converts values to other types if specified.
         * @param message CS_Reconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_Reconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_Reconnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_Reconnect
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_Reconnect. */
    interface ISC_Reconnect {

        /** SC_Reconnect err_code */
        err_code?: (number|null);
    }

    /** Represents a SC_Reconnect. */
    class SC_Reconnect implements ISC_Reconnect {

        /**
         * Constructs a new SC_Reconnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_Reconnect);

        /** SC_Reconnect err_code. */
        public err_code: number;

        /**
         * Creates a new SC_Reconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_Reconnect instance
         */
        public static create(properties?: m_proto.ISC_Reconnect): m_proto.SC_Reconnect;

        /**
         * Encodes the specified SC_Reconnect message. Does not implicitly {@link m_proto.SC_Reconnect.verify|verify} messages.
         * @param message SC_Reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_Reconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_Reconnect message, length delimited. Does not implicitly {@link m_proto.SC_Reconnect.verify|verify} messages.
         * @param message SC_Reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_Reconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_Reconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_Reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_Reconnect;

        /**
         * Decodes a SC_Reconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_Reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_Reconnect;

        /**
         * Verifies a SC_Reconnect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_Reconnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_Reconnect
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_Reconnect;

        /**
         * Creates a plain object from a SC_Reconnect message. Also converts values to other types if specified.
         * @param message SC_Reconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_Reconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_Reconnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_Reconnect
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_Ping. */
    interface ICS_Ping {
    }

    /** Represents a CS_Ping. */
    class CS_Ping implements ICS_Ping {

        /**
         * Constructs a new CS_Ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_Ping);

        /**
         * Creates a new CS_Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_Ping instance
         */
        public static create(properties?: m_proto.ICS_Ping): m_proto.CS_Ping;

        /**
         * Encodes the specified CS_Ping message. Does not implicitly {@link m_proto.CS_Ping.verify|verify} messages.
         * @param message CS_Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_Ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_Ping message, length delimited. Does not implicitly {@link m_proto.CS_Ping.verify|verify} messages.
         * @param message CS_Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_Ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_Ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_Ping;

        /**
         * Decodes a CS_Ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_Ping;

        /**
         * Verifies a CS_Ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_Ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_Ping
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_Ping;

        /**
         * Creates a plain object from a CS_Ping message. Also converts values to other types if specified.
         * @param message CS_Ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_Ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_Ping
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_Ping. */
    interface ISC_Ping {

        /** SC_Ping ctime */
        ctime?: (number|null);
    }

    /** Represents a SC_Ping. */
    class SC_Ping implements ISC_Ping {

        /**
         * Constructs a new SC_Ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_Ping);

        /** SC_Ping ctime. */
        public ctime: number;

        /**
         * Creates a new SC_Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_Ping instance
         */
        public static create(properties?: m_proto.ISC_Ping): m_proto.SC_Ping;

        /**
         * Encodes the specified SC_Ping message. Does not implicitly {@link m_proto.SC_Ping.verify|verify} messages.
         * @param message SC_Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_Ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_Ping message, length delimited. Does not implicitly {@link m_proto.SC_Ping.verify|verify} messages.
         * @param message SC_Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_Ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_Ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_Ping;

        /**
         * Decodes a SC_Ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_Ping;

        /**
         * Verifies a SC_Ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_Ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_Ping
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_Ping;

        /**
         * Creates a plain object from a SC_Ping message. Also converts values to other types if specified.
         * @param message SC_Ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_Ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_Ping
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_CheckRoleName. */
    interface ICS_CheckRoleName {

        /** CS_CheckRoleName role_name */
        role_name?: (string|null);
    }

    /** Represents a CS_CheckRoleName. */
    class CS_CheckRoleName implements ICS_CheckRoleName {

        /**
         * Constructs a new CS_CheckRoleName.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_CheckRoleName);

        /** CS_CheckRoleName role_name. */
        public role_name: string;

        /**
         * Creates a new CS_CheckRoleName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_CheckRoleName instance
         */
        public static create(properties?: m_proto.ICS_CheckRoleName): m_proto.CS_CheckRoleName;

        /**
         * Encodes the specified CS_CheckRoleName message. Does not implicitly {@link m_proto.CS_CheckRoleName.verify|verify} messages.
         * @param message CS_CheckRoleName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_CheckRoleName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_CheckRoleName message, length delimited. Does not implicitly {@link m_proto.CS_CheckRoleName.verify|verify} messages.
         * @param message CS_CheckRoleName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_CheckRoleName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_CheckRoleName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_CheckRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_CheckRoleName;

        /**
         * Decodes a CS_CheckRoleName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_CheckRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_CheckRoleName;

        /**
         * Verifies a CS_CheckRoleName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_CheckRoleName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_CheckRoleName
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_CheckRoleName;

        /**
         * Creates a plain object from a CS_CheckRoleName message. Also converts values to other types if specified.
         * @param message CS_CheckRoleName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_CheckRoleName, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_CheckRoleName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_CheckRoleName
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_CheckRoleName. */
    interface ISC_CheckRoleName {

        /** SC_CheckRoleName has_exist */
        has_exist?: (boolean|null);
    }

    /** Represents a SC_CheckRoleName. */
    class SC_CheckRoleName implements ISC_CheckRoleName {

        /**
         * Constructs a new SC_CheckRoleName.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_CheckRoleName);

        /** SC_CheckRoleName has_exist. */
        public has_exist: boolean;

        /**
         * Creates a new SC_CheckRoleName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_CheckRoleName instance
         */
        public static create(properties?: m_proto.ISC_CheckRoleName): m_proto.SC_CheckRoleName;

        /**
         * Encodes the specified SC_CheckRoleName message. Does not implicitly {@link m_proto.SC_CheckRoleName.verify|verify} messages.
         * @param message SC_CheckRoleName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_CheckRoleName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_CheckRoleName message, length delimited. Does not implicitly {@link m_proto.SC_CheckRoleName.verify|verify} messages.
         * @param message SC_CheckRoleName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_CheckRoleName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_CheckRoleName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_CheckRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_CheckRoleName;

        /**
         * Decodes a SC_CheckRoleName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_CheckRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_CheckRoleName;

        /**
         * Verifies a SC_CheckRoleName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_CheckRoleName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_CheckRoleName
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_CheckRoleName;

        /**
         * Creates a plain object from a SC_CheckRoleName message. Also converts values to other types if specified.
         * @param message SC_CheckRoleName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_CheckRoleName, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_CheckRoleName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_CheckRoleName
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_RenameRole. */
    interface ICS_RenameRole {

        /** CS_RenameRole role_name */
        role_name?: (string|null);
    }

    /** Represents a CS_RenameRole. */
    class CS_RenameRole implements ICS_RenameRole {

        /**
         * Constructs a new CS_RenameRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_RenameRole);

        /** CS_RenameRole role_name. */
        public role_name: string;

        /**
         * Creates a new CS_RenameRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_RenameRole instance
         */
        public static create(properties?: m_proto.ICS_RenameRole): m_proto.CS_RenameRole;

        /**
         * Encodes the specified CS_RenameRole message. Does not implicitly {@link m_proto.CS_RenameRole.verify|verify} messages.
         * @param message CS_RenameRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_RenameRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_RenameRole message, length delimited. Does not implicitly {@link m_proto.CS_RenameRole.verify|verify} messages.
         * @param message CS_RenameRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_RenameRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_RenameRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_RenameRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_RenameRole;

        /**
         * Decodes a CS_RenameRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_RenameRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_RenameRole;

        /**
         * Verifies a CS_RenameRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_RenameRole message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_RenameRole
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_RenameRole;

        /**
         * Creates a plain object from a CS_RenameRole message. Also converts values to other types if specified.
         * @param message CS_RenameRole
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_RenameRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_RenameRole to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_RenameRole
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_RenameRole. */
    interface ISC_RenameRole {

        /** SC_RenameRole err_code */
        err_code?: (number|null);

        /** SC_RenameRole role_name */
        role_name?: (string|null);

        /** SC_RenameRole rename_time */
        rename_time?: (number|null);
    }

    /** Represents a SC_RenameRole. */
    class SC_RenameRole implements ISC_RenameRole {

        /**
         * Constructs a new SC_RenameRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_RenameRole);

        /** SC_RenameRole err_code. */
        public err_code: number;

        /** SC_RenameRole role_name. */
        public role_name: string;

        /** SC_RenameRole rename_time. */
        public rename_time: number;

        /**
         * Creates a new SC_RenameRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_RenameRole instance
         */
        public static create(properties?: m_proto.ISC_RenameRole): m_proto.SC_RenameRole;

        /**
         * Encodes the specified SC_RenameRole message. Does not implicitly {@link m_proto.SC_RenameRole.verify|verify} messages.
         * @param message SC_RenameRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_RenameRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_RenameRole message, length delimited. Does not implicitly {@link m_proto.SC_RenameRole.verify|verify} messages.
         * @param message SC_RenameRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_RenameRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_RenameRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_RenameRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_RenameRole;

        /**
         * Decodes a SC_RenameRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_RenameRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_RenameRole;

        /**
         * Verifies a SC_RenameRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_RenameRole message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_RenameRole
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_RenameRole;

        /**
         * Creates a plain object from a SC_RenameRole message. Also converts values to other types if specified.
         * @param message SC_RenameRole
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_RenameRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_RenameRole to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_RenameRole
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_CheckCreateProhibit. */
    interface ICS_CheckCreateProhibit {

        /** CS_CheckCreateProhibit uid */
        uid?: (string|null);
    }

    /** Represents a CS_CheckCreateProhibit. */
    class CS_CheckCreateProhibit implements ICS_CheckCreateProhibit {

        /**
         * Constructs a new CS_CheckCreateProhibit.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_CheckCreateProhibit);

        /** CS_CheckCreateProhibit uid. */
        public uid: string;

        /**
         * Creates a new CS_CheckCreateProhibit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_CheckCreateProhibit instance
         */
        public static create(properties?: m_proto.ICS_CheckCreateProhibit): m_proto.CS_CheckCreateProhibit;

        /**
         * Encodes the specified CS_CheckCreateProhibit message. Does not implicitly {@link m_proto.CS_CheckCreateProhibit.verify|verify} messages.
         * @param message CS_CheckCreateProhibit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_CheckCreateProhibit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_CheckCreateProhibit message, length delimited. Does not implicitly {@link m_proto.CS_CheckCreateProhibit.verify|verify} messages.
         * @param message CS_CheckCreateProhibit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_CheckCreateProhibit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_CheckCreateProhibit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_CheckCreateProhibit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_CheckCreateProhibit;

        /**
         * Decodes a CS_CheckCreateProhibit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_CheckCreateProhibit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_CheckCreateProhibit;

        /**
         * Verifies a CS_CheckCreateProhibit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_CheckCreateProhibit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_CheckCreateProhibit
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_CheckCreateProhibit;

        /**
         * Creates a plain object from a CS_CheckCreateProhibit message. Also converts values to other types if specified.
         * @param message CS_CheckCreateProhibit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_CheckCreateProhibit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_CheckCreateProhibit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_CheckCreateProhibit
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_CheckCreateProhibit. */
    interface ISC_CheckCreateProhibit {

        /** SC_CheckCreateProhibit prohibit */
        prohibit?: (boolean|null);
    }

    /** Represents a SC_CheckCreateProhibit. */
    class SC_CheckCreateProhibit implements ISC_CheckCreateProhibit {

        /**
         * Constructs a new SC_CheckCreateProhibit.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_CheckCreateProhibit);

        /** SC_CheckCreateProhibit prohibit. */
        public prohibit: boolean;

        /**
         * Creates a new SC_CheckCreateProhibit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_CheckCreateProhibit instance
         */
        public static create(properties?: m_proto.ISC_CheckCreateProhibit): m_proto.SC_CheckCreateProhibit;

        /**
         * Encodes the specified SC_CheckCreateProhibit message. Does not implicitly {@link m_proto.SC_CheckCreateProhibit.verify|verify} messages.
         * @param message SC_CheckCreateProhibit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_CheckCreateProhibit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_CheckCreateProhibit message, length delimited. Does not implicitly {@link m_proto.SC_CheckCreateProhibit.verify|verify} messages.
         * @param message SC_CheckCreateProhibit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_CheckCreateProhibit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_CheckCreateProhibit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_CheckCreateProhibit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_CheckCreateProhibit;

        /**
         * Decodes a SC_CheckCreateProhibit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_CheckCreateProhibit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_CheckCreateProhibit;

        /**
         * Verifies a SC_CheckCreateProhibit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_CheckCreateProhibit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_CheckCreateProhibit
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_CheckCreateProhibit;

        /**
         * Creates a plain object from a SC_CheckCreateProhibit message. Also converts values to other types if specified.
         * @param message SC_CheckCreateProhibit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_CheckCreateProhibit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_CheckCreateProhibit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_CheckCreateProhibit
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_CheckReconnect. */
    interface ICS_CheckReconnect {

        /** CS_CheckReconnect token */
        token?: (number|Long|null);
    }

    /** Represents a CS_CheckReconnect. */
    class CS_CheckReconnect implements ICS_CheckReconnect {

        /**
         * Constructs a new CS_CheckReconnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_CheckReconnect);

        /** CS_CheckReconnect token. */
        public token: (number|Long);

        /**
         * Creates a new CS_CheckReconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_CheckReconnect instance
         */
        public static create(properties?: m_proto.ICS_CheckReconnect): m_proto.CS_CheckReconnect;

        /**
         * Encodes the specified CS_CheckReconnect message. Does not implicitly {@link m_proto.CS_CheckReconnect.verify|verify} messages.
         * @param message CS_CheckReconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_CheckReconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_CheckReconnect message, length delimited. Does not implicitly {@link m_proto.CS_CheckReconnect.verify|verify} messages.
         * @param message CS_CheckReconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_CheckReconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_CheckReconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_CheckReconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_CheckReconnect;

        /**
         * Decodes a CS_CheckReconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_CheckReconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_CheckReconnect;

        /**
         * Verifies a CS_CheckReconnect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_CheckReconnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_CheckReconnect
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_CheckReconnect;

        /**
         * Creates a plain object from a CS_CheckReconnect message. Also converts values to other types if specified.
         * @param message CS_CheckReconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_CheckReconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_CheckReconnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_CheckReconnect
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_CheckReconnect. */
    interface ISC_CheckReconnect {

        /** SC_CheckReconnect err_code */
        err_code?: (number|null);

        /** SC_CheckReconnect can_reconnect */
        can_reconnect?: (boolean|null);
    }

    /** Represents a SC_CheckReconnect. */
    class SC_CheckReconnect implements ISC_CheckReconnect {

        /**
         * Constructs a new SC_CheckReconnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_CheckReconnect);

        /** SC_CheckReconnect err_code. */
        public err_code: number;

        /** SC_CheckReconnect can_reconnect. */
        public can_reconnect: boolean;

        /**
         * Creates a new SC_CheckReconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_CheckReconnect instance
         */
        public static create(properties?: m_proto.ISC_CheckReconnect): m_proto.SC_CheckReconnect;

        /**
         * Encodes the specified SC_CheckReconnect message. Does not implicitly {@link m_proto.SC_CheckReconnect.verify|verify} messages.
         * @param message SC_CheckReconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_CheckReconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_CheckReconnect message, length delimited. Does not implicitly {@link m_proto.SC_CheckReconnect.verify|verify} messages.
         * @param message SC_CheckReconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_CheckReconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_CheckReconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_CheckReconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_CheckReconnect;

        /**
         * Decodes a SC_CheckReconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_CheckReconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_CheckReconnect;

        /**
         * Verifies a SC_CheckReconnect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_CheckReconnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_CheckReconnect
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_CheckReconnect;

        /**
         * Creates a plain object from a SC_CheckReconnect message. Also converts values to other types if specified.
         * @param message SC_CheckReconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_CheckReconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_CheckReconnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_CheckReconnect
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_SwitchObserve. */
    interface ICS_SwitchObserve {
    }

    /** Represents a CS_SwitchObserve. */
    class CS_SwitchObserve implements ICS_SwitchObserve {

        /**
         * Constructs a new CS_SwitchObserve.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_SwitchObserve);

        /**
         * Creates a new CS_SwitchObserve instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_SwitchObserve instance
         */
        public static create(properties?: m_proto.ICS_SwitchObserve): m_proto.CS_SwitchObserve;

        /**
         * Encodes the specified CS_SwitchObserve message. Does not implicitly {@link m_proto.CS_SwitchObserve.verify|verify} messages.
         * @param message CS_SwitchObserve message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_SwitchObserve, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_SwitchObserve message, length delimited. Does not implicitly {@link m_proto.CS_SwitchObserve.verify|verify} messages.
         * @param message CS_SwitchObserve message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_SwitchObserve, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_SwitchObserve message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_SwitchObserve
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_SwitchObserve;

        /**
         * Decodes a CS_SwitchObserve message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_SwitchObserve
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_SwitchObserve;

        /**
         * Verifies a CS_SwitchObserve message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_SwitchObserve message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_SwitchObserve
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_SwitchObserve;

        /**
         * Creates a plain object from a CS_SwitchObserve message. Also converts values to other types if specified.
         * @param message CS_SwitchObserve
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_SwitchObserve, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_SwitchObserve to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_SwitchObserve
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_SwitchObserve. */
    interface ISC_SwitchObserve {

        /** SC_SwitchObserve err_code */
        err_code?: (number|null);
    }

    /** Represents a SC_SwitchObserve. */
    class SC_SwitchObserve implements ISC_SwitchObserve {

        /**
         * Constructs a new SC_SwitchObserve.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_SwitchObserve);

        /** SC_SwitchObserve err_code. */
        public err_code: number;

        /**
         * Creates a new SC_SwitchObserve instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_SwitchObserve instance
         */
        public static create(properties?: m_proto.ISC_SwitchObserve): m_proto.SC_SwitchObserve;

        /**
         * Encodes the specified SC_SwitchObserve message. Does not implicitly {@link m_proto.SC_SwitchObserve.verify|verify} messages.
         * @param message SC_SwitchObserve message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_SwitchObserve, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_SwitchObserve message, length delimited. Does not implicitly {@link m_proto.SC_SwitchObserve.verify|verify} messages.
         * @param message SC_SwitchObserve message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_SwitchObserve, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_SwitchObserve message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_SwitchObserve
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_SwitchObserve;

        /**
         * Decodes a SC_SwitchObserve message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_SwitchObserve
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_SwitchObserve;

        /**
         * Verifies a SC_SwitchObserve message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_SwitchObserve message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_SwitchObserve
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_SwitchObserve;

        /**
         * Creates a plain object from a SC_SwitchObserve message. Also converts values to other types if specified.
         * @param message SC_SwitchObserve
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_SwitchObserve, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_SwitchObserve to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_SwitchObserve
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_RandomRoleName. */
    interface ICS_RandomRoleName {
    }

    /** Represents a CS_RandomRoleName. */
    class CS_RandomRoleName implements ICS_RandomRoleName {

        /**
         * Constructs a new CS_RandomRoleName.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_RandomRoleName);

        /**
         * Creates a new CS_RandomRoleName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_RandomRoleName instance
         */
        public static create(properties?: m_proto.ICS_RandomRoleName): m_proto.CS_RandomRoleName;

        /**
         * Encodes the specified CS_RandomRoleName message. Does not implicitly {@link m_proto.CS_RandomRoleName.verify|verify} messages.
         * @param message CS_RandomRoleName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_RandomRoleName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_RandomRoleName message, length delimited. Does not implicitly {@link m_proto.CS_RandomRoleName.verify|verify} messages.
         * @param message CS_RandomRoleName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_RandomRoleName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_RandomRoleName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_RandomRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_RandomRoleName;

        /**
         * Decodes a CS_RandomRoleName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_RandomRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_RandomRoleName;

        /**
         * Verifies a CS_RandomRoleName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_RandomRoleName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_RandomRoleName
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_RandomRoleName;

        /**
         * Creates a plain object from a CS_RandomRoleName message. Also converts values to other types if specified.
         * @param message CS_RandomRoleName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_RandomRoleName, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_RandomRoleName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_RandomRoleName
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_RandomRoleName. */
    interface ISC_RandomRoleName {

        /** SC_RandomRoleName role_name */
        role_name?: (string|null);
    }

    /** Represents a SC_RandomRoleName. */
    class SC_RandomRoleName implements ISC_RandomRoleName {

        /**
         * Constructs a new SC_RandomRoleName.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_RandomRoleName);

        /** SC_RandomRoleName role_name. */
        public role_name: string;

        /**
         * Creates a new SC_RandomRoleName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_RandomRoleName instance
         */
        public static create(properties?: m_proto.ISC_RandomRoleName): m_proto.SC_RandomRoleName;

        /**
         * Encodes the specified SC_RandomRoleName message. Does not implicitly {@link m_proto.SC_RandomRoleName.verify|verify} messages.
         * @param message SC_RandomRoleName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_RandomRoleName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_RandomRoleName message, length delimited. Does not implicitly {@link m_proto.SC_RandomRoleName.verify|verify} messages.
         * @param message SC_RandomRoleName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_RandomRoleName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_RandomRoleName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_RandomRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_RandomRoleName;

        /**
         * Decodes a SC_RandomRoleName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_RandomRoleName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_RandomRoleName;

        /**
         * Verifies a SC_RandomRoleName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_RandomRoleName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_RandomRoleName
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_RandomRoleName;

        /**
         * Creates a plain object from a SC_RandomRoleName message. Also converts values to other types if specified.
         * @param message SC_RandomRoleName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_RandomRoleName, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_RandomRoleName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_RandomRoleName
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_ChangeCareer. */
    interface ICS_ChangeCareer {

        /** CS_ChangeCareer career */
        career?: (number|null);
    }

    /** Represents a CS_ChangeCareer. */
    class CS_ChangeCareer implements ICS_ChangeCareer {

        /**
         * Constructs a new CS_ChangeCareer.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_ChangeCareer);

        /** CS_ChangeCareer career. */
        public career: number;

        /**
         * Creates a new CS_ChangeCareer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_ChangeCareer instance
         */
        public static create(properties?: m_proto.ICS_ChangeCareer): m_proto.CS_ChangeCareer;

        /**
         * Encodes the specified CS_ChangeCareer message. Does not implicitly {@link m_proto.CS_ChangeCareer.verify|verify} messages.
         * @param message CS_ChangeCareer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_ChangeCareer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_ChangeCareer message, length delimited. Does not implicitly {@link m_proto.CS_ChangeCareer.verify|verify} messages.
         * @param message CS_ChangeCareer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_ChangeCareer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_ChangeCareer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_ChangeCareer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_ChangeCareer;

        /**
         * Decodes a CS_ChangeCareer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_ChangeCareer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_ChangeCareer;

        /**
         * Verifies a CS_ChangeCareer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_ChangeCareer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_ChangeCareer
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_ChangeCareer;

        /**
         * Creates a plain object from a CS_ChangeCareer message. Also converts values to other types if specified.
         * @param message CS_ChangeCareer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_ChangeCareer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_ChangeCareer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_ChangeCareer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_ChangeCareer. */
    interface ISC_ChangeCareer {

        /** SC_ChangeCareer err_code */
        err_code?: (number|null);

        /** SC_ChangeCareer career */
        career?: (number|null);
    }

    /** Represents a SC_ChangeCareer. */
    class SC_ChangeCareer implements ISC_ChangeCareer {

        /**
         * Constructs a new SC_ChangeCareer.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_ChangeCareer);

        /** SC_ChangeCareer err_code. */
        public err_code: number;

        /** SC_ChangeCareer career. */
        public career: number;

        /**
         * Creates a new SC_ChangeCareer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_ChangeCareer instance
         */
        public static create(properties?: m_proto.ISC_ChangeCareer): m_proto.SC_ChangeCareer;

        /**
         * Encodes the specified SC_ChangeCareer message. Does not implicitly {@link m_proto.SC_ChangeCareer.verify|verify} messages.
         * @param message SC_ChangeCareer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_ChangeCareer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_ChangeCareer message, length delimited. Does not implicitly {@link m_proto.SC_ChangeCareer.verify|verify} messages.
         * @param message SC_ChangeCareer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_ChangeCareer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_ChangeCareer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_ChangeCareer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_ChangeCareer;

        /**
         * Decodes a SC_ChangeCareer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_ChangeCareer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_ChangeCareer;

        /**
         * Verifies a SC_ChangeCareer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_ChangeCareer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_ChangeCareer
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_ChangeCareer;

        /**
         * Creates a plain object from a SC_ChangeCareer message. Also converts values to other types if specified.
         * @param message SC_ChangeCareer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_ChangeCareer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_ChangeCareer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_ChangeCareer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_QuickLogin. */
    interface ICS_QuickLogin {

        /** CS_QuickLogin account */
        account?: (string|null);

        /** CS_QuickLogin server_id */
        server_id?: (number|null);

        /** CS_QuickLogin site */
        site?: (string|null);
    }

    /** Represents a CS_QuickLogin. */
    class CS_QuickLogin implements ICS_QuickLogin {

        /**
         * Constructs a new CS_QuickLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_QuickLogin);

        /** CS_QuickLogin account. */
        public account: string;

        /** CS_QuickLogin server_id. */
        public server_id: number;

        /** CS_QuickLogin site. */
        public site: string;

        /**
         * Creates a new CS_QuickLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_QuickLogin instance
         */
        public static create(properties?: m_proto.ICS_QuickLogin): m_proto.CS_QuickLogin;

        /**
         * Encodes the specified CS_QuickLogin message. Does not implicitly {@link m_proto.CS_QuickLogin.verify|verify} messages.
         * @param message CS_QuickLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_QuickLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_QuickLogin message, length delimited. Does not implicitly {@link m_proto.CS_QuickLogin.verify|verify} messages.
         * @param message CS_QuickLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_QuickLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_QuickLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_QuickLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_QuickLogin;

        /**
         * Decodes a CS_QuickLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_QuickLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_QuickLogin;

        /**
         * Verifies a CS_QuickLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_QuickLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_QuickLogin
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_QuickLogin;

        /**
         * Creates a plain object from a CS_QuickLogin message. Also converts values to other types if specified.
         * @param message CS_QuickLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_QuickLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_QuickLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_QuickLogin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_QuickLogin. */
    interface ISC_QuickLogin {

        /** SC_QuickLogin err_code */
        err_code?: (number|null);

        /** SC_QuickLogin role_id */
        role_id?: (number|Long|null);

        /** SC_QuickLogin roleName */
        roleName?: (string|null);

        /** SC_QuickLogin server_time */
        server_time?: (number|null);

        /** SC_QuickLogin token */
        token?: (number|Long|null);

        /** SC_QuickLogin create_time */
        create_time?: (number|null);

        /** SC_QuickLogin open_time */
        open_time?: (number|null);
    }

    /** Represents a SC_QuickLogin. */
    class SC_QuickLogin implements ISC_QuickLogin {

        /**
         * Constructs a new SC_QuickLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_QuickLogin);

        /** SC_QuickLogin err_code. */
        public err_code: number;

        /** SC_QuickLogin role_id. */
        public role_id: (number|Long);

        /** SC_QuickLogin roleName. */
        public roleName: string;

        /** SC_QuickLogin server_time. */
        public server_time: number;

        /** SC_QuickLogin token. */
        public token: (number|Long);

        /** SC_QuickLogin create_time. */
        public create_time: number;

        /** SC_QuickLogin open_time. */
        public open_time: number;

        /**
         * Creates a new SC_QuickLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_QuickLogin instance
         */
        public static create(properties?: m_proto.ISC_QuickLogin): m_proto.SC_QuickLogin;

        /**
         * Encodes the specified SC_QuickLogin message. Does not implicitly {@link m_proto.SC_QuickLogin.verify|verify} messages.
         * @param message SC_QuickLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_QuickLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_QuickLogin message, length delimited. Does not implicitly {@link m_proto.SC_QuickLogin.verify|verify} messages.
         * @param message SC_QuickLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_QuickLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_QuickLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_QuickLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_QuickLogin;

        /**
         * Decodes a SC_QuickLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_QuickLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_QuickLogin;

        /**
         * Verifies a SC_QuickLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_QuickLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_QuickLogin
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_QuickLogin;

        /**
         * Creates a plain object from a SC_QuickLogin message. Also converts values to other types if specified.
         * @param message SC_QuickLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_QuickLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_QuickLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_QuickLogin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_GetPlayerInfo. */
    interface ICS_GetPlayerInfo {
    }

    /** Represents a CS_GetPlayerInfo. */
    class CS_GetPlayerInfo implements ICS_GetPlayerInfo {

        /**
         * Constructs a new CS_GetPlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_GetPlayerInfo);

        /**
         * Creates a new CS_GetPlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_GetPlayerInfo instance
         */
        public static create(properties?: m_proto.ICS_GetPlayerInfo): m_proto.CS_GetPlayerInfo;

        /**
         * Encodes the specified CS_GetPlayerInfo message. Does not implicitly {@link m_proto.CS_GetPlayerInfo.verify|verify} messages.
         * @param message CS_GetPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_GetPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_GetPlayerInfo message, length delimited. Does not implicitly {@link m_proto.CS_GetPlayerInfo.verify|verify} messages.
         * @param message CS_GetPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_GetPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_GetPlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_GetPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_GetPlayerInfo;

        /**
         * Decodes a CS_GetPlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_GetPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_GetPlayerInfo;

        /**
         * Verifies a CS_GetPlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_GetPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_GetPlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_GetPlayerInfo;

        /**
         * Creates a plain object from a CS_GetPlayerInfo message. Also converts values to other types if specified.
         * @param message CS_GetPlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_GetPlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_GetPlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_GetPlayerInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_GetPlayerInfo. */
    interface ISC_GetPlayerInfo {

        /** SC_GetPlayerInfo role_id */
        role_id?: (number|Long|null);

        /** SC_GetPlayerInfo role_name */
        role_name?: (string|null);

        /** SC_GetPlayerInfo career */
        career?: (number|null);
    }

    /** Represents a SC_GetPlayerInfo. */
    class SC_GetPlayerInfo implements ISC_GetPlayerInfo {

        /**
         * Constructs a new SC_GetPlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_GetPlayerInfo);

        /** SC_GetPlayerInfo role_id. */
        public role_id: (number|Long);

        /** SC_GetPlayerInfo role_name. */
        public role_name: string;

        /** SC_GetPlayerInfo career. */
        public career: number;

        /**
         * Creates a new SC_GetPlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_GetPlayerInfo instance
         */
        public static create(properties?: m_proto.ISC_GetPlayerInfo): m_proto.SC_GetPlayerInfo;

        /**
         * Encodes the specified SC_GetPlayerInfo message. Does not implicitly {@link m_proto.SC_GetPlayerInfo.verify|verify} messages.
         * @param message SC_GetPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_GetPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_GetPlayerInfo message, length delimited. Does not implicitly {@link m_proto.SC_GetPlayerInfo.verify|verify} messages.
         * @param message SC_GetPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_GetPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_GetPlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_GetPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_GetPlayerInfo;

        /**
         * Decodes a SC_GetPlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_GetPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_GetPlayerInfo;

        /**
         * Verifies a SC_GetPlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_GetPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_GetPlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_GetPlayerInfo;

        /**
         * Creates a plain object from a SC_GetPlayerInfo message. Also converts values to other types if specified.
         * @param message SC_GetPlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_GetPlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_GetPlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_GetPlayerInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CS_GetPlayerAttr. */
    interface ICS_GetPlayerAttr {
    }

    /** Represents a CS_GetPlayerAttr. */
    class CS_GetPlayerAttr implements ICS_GetPlayerAttr {

        /**
         * Constructs a new CS_GetPlayerAttr.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ICS_GetPlayerAttr);

        /**
         * Creates a new CS_GetPlayerAttr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CS_GetPlayerAttr instance
         */
        public static create(properties?: m_proto.ICS_GetPlayerAttr): m_proto.CS_GetPlayerAttr;

        /**
         * Encodes the specified CS_GetPlayerAttr message. Does not implicitly {@link m_proto.CS_GetPlayerAttr.verify|verify} messages.
         * @param message CS_GetPlayerAttr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ICS_GetPlayerAttr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CS_GetPlayerAttr message, length delimited. Does not implicitly {@link m_proto.CS_GetPlayerAttr.verify|verify} messages.
         * @param message CS_GetPlayerAttr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ICS_GetPlayerAttr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CS_GetPlayerAttr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CS_GetPlayerAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.CS_GetPlayerAttr;

        /**
         * Decodes a CS_GetPlayerAttr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CS_GetPlayerAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.CS_GetPlayerAttr;

        /**
         * Verifies a CS_GetPlayerAttr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CS_GetPlayerAttr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CS_GetPlayerAttr
         */
        public static fromObject(object: { [k: string]: any }): m_proto.CS_GetPlayerAttr;

        /**
         * Creates a plain object from a CS_GetPlayerAttr message. Also converts values to other types if specified.
         * @param message CS_GetPlayerAttr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.CS_GetPlayerAttr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CS_GetPlayerAttr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CS_GetPlayerAttr
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_GetPlayerAttr. */
    interface ISC_GetPlayerAttr {
    }

    /** Represents a SC_GetPlayerAttr. */
    class SC_GetPlayerAttr implements ISC_GetPlayerAttr {

        /**
         * Constructs a new SC_GetPlayerAttr.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_GetPlayerAttr);

        /**
         * Creates a new SC_GetPlayerAttr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_GetPlayerAttr instance
         */
        public static create(properties?: m_proto.ISC_GetPlayerAttr): m_proto.SC_GetPlayerAttr;

        /**
         * Encodes the specified SC_GetPlayerAttr message. Does not implicitly {@link m_proto.SC_GetPlayerAttr.verify|verify} messages.
         * @param message SC_GetPlayerAttr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_GetPlayerAttr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_GetPlayerAttr message, length delimited. Does not implicitly {@link m_proto.SC_GetPlayerAttr.verify|verify} messages.
         * @param message SC_GetPlayerAttr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_GetPlayerAttr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_GetPlayerAttr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_GetPlayerAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_GetPlayerAttr;

        /**
         * Decodes a SC_GetPlayerAttr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_GetPlayerAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_GetPlayerAttr;

        /**
         * Verifies a SC_GetPlayerAttr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_GetPlayerAttr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_GetPlayerAttr
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_GetPlayerAttr;

        /**
         * Creates a plain object from a SC_GetPlayerAttr message. Also converts values to other types if specified.
         * @param message SC_GetPlayerAttr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_GetPlayerAttr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_GetPlayerAttr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_GetPlayerAttr
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_MiscNotify. */
    interface ISC_MiscNotify {
    }

    /** Represents a SC_MiscNotify. */
    class SC_MiscNotify implements ISC_MiscNotify {

        /**
         * Constructs a new SC_MiscNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_MiscNotify);

        /**
         * Creates a new SC_MiscNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_MiscNotify instance
         */
        public static create(properties?: m_proto.ISC_MiscNotify): m_proto.SC_MiscNotify;

        /**
         * Encodes the specified SC_MiscNotify message. Does not implicitly {@link m_proto.SC_MiscNotify.verify|verify} messages.
         * @param message SC_MiscNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_MiscNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_MiscNotify message, length delimited. Does not implicitly {@link m_proto.SC_MiscNotify.verify|verify} messages.
         * @param message SC_MiscNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_MiscNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_MiscNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_MiscNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_MiscNotify;

        /**
         * Decodes a SC_MiscNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_MiscNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_MiscNotify;

        /**
         * Verifies a SC_MiscNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_MiscNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_MiscNotify
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_MiscNotify;

        /**
         * Creates a plain object from a SC_MiscNotify message. Also converts values to other types if specified.
         * @param message SC_MiscNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_MiscNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_MiscNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_MiscNotify
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_TimeNotify. */
    interface ISC_TimeNotify {

        /** SC_TimeNotify create_day */
        create_day?: (number|null);

        /** SC_TimeNotify open_day */
        open_day?: (number|null);
    }

    /** Represents a SC_TimeNotify. */
    class SC_TimeNotify implements ISC_TimeNotify {

        /**
         * Constructs a new SC_TimeNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_TimeNotify);

        /** SC_TimeNotify create_day. */
        public create_day: number;

        /** SC_TimeNotify open_day. */
        public open_day: number;

        /**
         * Creates a new SC_TimeNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_TimeNotify instance
         */
        public static create(properties?: m_proto.ISC_TimeNotify): m_proto.SC_TimeNotify;

        /**
         * Encodes the specified SC_TimeNotify message. Does not implicitly {@link m_proto.SC_TimeNotify.verify|verify} messages.
         * @param message SC_TimeNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_TimeNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_TimeNotify message, length delimited. Does not implicitly {@link m_proto.SC_TimeNotify.verify|verify} messages.
         * @param message SC_TimeNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_TimeNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_TimeNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_TimeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_TimeNotify;

        /**
         * Decodes a SC_TimeNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_TimeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_TimeNotify;

        /**
         * Verifies a SC_TimeNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_TimeNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_TimeNotify
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_TimeNotify;

        /**
         * Creates a plain object from a SC_TimeNotify message. Also converts values to other types if specified.
         * @param message SC_TimeNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_TimeNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_TimeNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_TimeNotify
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SC_KickNotify. */
    interface ISC_KickNotify {

        /** SC_KickNotify reason */
        reason?: (number|null);

        /** SC_KickNotify prompt */
        prompt?: (string|null);
    }

    /** Represents a SC_KickNotify. */
    class SC_KickNotify implements ISC_KickNotify {

        /**
         * Constructs a new SC_KickNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: m_proto.ISC_KickNotify);

        /** SC_KickNotify reason. */
        public reason: number;

        /** SC_KickNotify prompt. */
        public prompt: string;

        /**
         * Creates a new SC_KickNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SC_KickNotify instance
         */
        public static create(properties?: m_proto.ISC_KickNotify): m_proto.SC_KickNotify;

        /**
         * Encodes the specified SC_KickNotify message. Does not implicitly {@link m_proto.SC_KickNotify.verify|verify} messages.
         * @param message SC_KickNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: m_proto.ISC_KickNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SC_KickNotify message, length delimited. Does not implicitly {@link m_proto.SC_KickNotify.verify|verify} messages.
         * @param message SC_KickNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: m_proto.ISC_KickNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SC_KickNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SC_KickNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): m_proto.SC_KickNotify;

        /**
         * Decodes a SC_KickNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SC_KickNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): m_proto.SC_KickNotify;

        /**
         * Verifies a SC_KickNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SC_KickNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SC_KickNotify
         */
        public static fromObject(object: { [k: string]: any }): m_proto.SC_KickNotify;

        /**
         * Creates a plain object from a SC_KickNotify message. Also converts values to other types if specified.
         * @param message SC_KickNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: m_proto.SC_KickNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SC_KickNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SC_KickNotify
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
