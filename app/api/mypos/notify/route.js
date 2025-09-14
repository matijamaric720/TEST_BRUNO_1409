// app/api/mypos/notify/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    console.log('=== MyPOS NOTIFICATION RECEIVED ===');
    console.log('Headers:', request.headers);
    console.log('Body:', body);

    const {
      IPCmethod,
      OrderID,
      Amount,
      Currency,
      TxnStatus,
      TxnId,
      CardType,
      CardMasked,
      CustomerEmail,
      CustomerFirstName,
      CustomerLastName,
      IPCtime,
      Signature
    } = body;

    // Verify this is a purchase notification
    if (IPCmethod === 'IPCPurchaseNotify') {
      console.log(`Processing payment notification for order ${OrderID}`);
      
      // Check payment status
      if (TxnStatus === 'Success') {
        console.log(`✅ Payment SUCCESSFUL for order ${OrderID}`);
        console.log(`   Amount: ${Amount} ${Currency}`);
        console.log(`   Transaction ID: ${TxnId}`);
        console.log(`   Card: ${CardType} ending in ${CardMasked?.slice(-4)}`);
        console.log(`   Customer: ${CustomerFirstName} ${CustomerLastName} (${CustomerEmail})`);
        
        // HERE YOU WOULD TYPICALLY:
        // 1. Update your database with the successful payment
        // 2. Send confirmation email to customer
        // 3. Update booking status
        // 4. Any other business logic
        
        /*
        Example database operations:
        
        await updateBookingStatus(OrderID, {
          status: 'paid',
          paymentId: TxnId,
          amount: Amount,
          currency: Currency,
          cardType: CardType,
          cardMasked: CardMasked,
          paidAt: new Date(),
          customerEmail: CustomerEmail
        });
        
        await sendConfirmationEmail(CustomerEmail, {
          orderID: OrderID,
          amount: Amount,
          currency: Currency,
          customerName: `${CustomerFirstName} ${CustomerLastName}`
        });
        */
        
        console.log('Payment processing completed successfully');
        
      } else {
        console.log(`❌ Payment FAILED for order ${OrderID}`);
        console.log(`   Status: ${TxnStatus}`);
        
        // Handle failed payment
        /*
        await updateBookingStatus(OrderID, {
          status: 'failed',
          failureReason: TxnStatus,
          failedAt: new Date()
        });
        */
      }
    } else {
      console.log(`Received unhandled notification type: ${IPCmethod}`);
    }
    
    // IMPORTANT: MyPOS expects 'OK' response for successful processing
    console.log('Sending OK response to MyPOS');
    return new NextResponse('OK', { status: 200 });

  } catch (error) {
    console.error('❌ Error processing MyPOS notification:', error);
    
    // Still return OK to prevent MyPOS from retrying
    // But log the error for investigation
    return new NextResponse('OK', { status: 200 });
  }
}