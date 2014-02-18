import java.io.File;
import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import javax.xml.transform.TransformerException;


import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;


public class Iterate {
	
	private static final short NODE_TYPE_ELEMENT = 1;

	public static void main(String[] args) throws ParserConfigurationException, SAXException, IOException, TransformerException {
		final Document document = openDocument("src/input.xml");
		process(document);
	}
	
	public static void process(Document document) {
		Node root = document.getFirstChild();
		Element element = (Element) root;
		listAll(element);
		
		NodeList children = root.getChildNodes();
		
		for(int i = 0; i < children. getLength(); i++) {
			Node item = children.item(i);
			NodeList kids = item.getChildNodes();
			
			if(item.getNodeType() == NODE_TYPE_ELEMENT) {
				Element element1 = (Element) item;
				listAll(element1);
				
				for(int m = 0; m < kids.getLength(); m++) {
					Node kiddo = kids.item(m);
					
					if(kiddo.getNodeType() == NODE_TYPE_ELEMENT) {
						Element element2 = (Element) kiddo;
						listAll(element2);
					}
				}
				
			}
		}
		

	}
	
	public static void listAll(Element element) {
		System.out.print("\n" + element.getNodeName() + ";");
		NamedNodeMap attributes = element.getAttributes();
		int numAttrs = attributes.getLength();
		if(numAttrs == 0) {
			System.out.print(" no attributes");
		}
		
		for (int i = 0; i < numAttrs; i++) {
			Attr attr = (Attr) attributes.item(i);
			String attrName = attr.getNodeName();
			String attrValue = attr.getNodeValue();
			System.out.print(" " + attrName + " - " + attrValue + ",");
		}
	}

	private static Document openDocument(String filename) throws ParserConfigurationException, SAXException, IOException {
		final DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		final DocumentBuilder builder = factory.newDocumentBuilder();
		return builder.parse(new File(filename));
	}
	
} 
