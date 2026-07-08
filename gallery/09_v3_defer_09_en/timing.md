# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.79s  <ret> 발화 (turn1 첫 프레임)
     6.03s  agent 발화 시작: <ret> Certainly, let’s see about availability there. I’ve fo
     6.16s  user  발화 끝
     7.31s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.62s]: (tool result) Three rooms are available at Ocean View Hotel in San Die
    14.32s  agent 발화 끝
    15.08s  user  발화 시작: That sounds good, but… what’s the total cost?
    18.32s  agent 발화 시작: Give me a moment to check on that.
    18.45s  user  발화 끝
    20.40s  agent 발화 끝
    21.14s  user  발화 시작: Okay, great. While you’re doing that, could you tell me abou
    24.61s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Ocean View Hotel has an outdoor pool, a fitness center, 
    25.65s  agent 발화 시작: <ret> Now, regarding the hotel's amenities… Ocean View Hotel
    25.86s  user  발화 끝
    35.67s  agent 발화 끝
