# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hover the submit form button.
     2.18s  agent 발화 시작: <ret> Just a moment. The button says “Send” and has a green 
     2.18s  <ret> 발화 (turn1 첫 프레임)
     2.18s  user  발화 끝
     3.18s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.31s]: (button text: "Send", aria-label: "Submit form", background-color: "#4
     8.70s  user  발화 시작: Okay, good. And what’s the current time in Reykjavik?
     8.70s  agent 발화 끝
    12.62s  agent 발화 시작: <ret> Reykjavik time… It is eight seventeen PM in Reykjavik,
    12.62s  <ret> 발화 (turn3 첫 프레임)
    12.62s  user  발화 끝
    13.10s  ⚡SPAN 주입 [d'=0.48s / d_lead=0.87s]: (time: 8:17 PM, timezone: "Atlantic/Reykjavik", date: "October twenty-
    17.41s  user  발화 시작: Uh, can you book me a flight— I mean, a train— from London t
    17.41s  agent 발화 끝
    25.24s  agent 발화 시작: <ret> Certainly. Train HY783 departs London at ten fifteen A
    25.24s  <ret> 발화 (turn5 첫 프레임)
    25.24s  user  발화 끝
    25.48s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.44s]: (train number: HY783, departure time: 10:15 AM, arrival time: 2:42 PM,
    34.38s  user  발화 시작: That sounds perfect. Confirm the booking.
    34.38s  agent 발화 끝
    36.99s  agent 발화 시작: <ret> It is done. Your train booking, HY783, from London to 
    36.99s  <ret> 발화 (turn7 첫 프레임)
    36.99s  user  발화 끝
    37.79s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.31s]: (booking confirmed: true, booking_id: "HY783", passenger: "unknown", d
    44.38s  user  발화 시작: Excellent. That’s a relief.
    44.38s  agent 발화 끝
    46.12s  user  발화 끝
