# v3_fstart_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you schedule a hair appointment at The Hair Palace on Ap
     7.02s  agent 발화 시작: <ret> Certainly. Your haircut at The Hair Palace is confirme
     7.02s  <ret> 발화 (turn1 첫 프레임)
     7.02s  user  발화 끝
     7.18s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.37s]: Appointment confirmed. The Hair Palace. April first, 4:30 PM. Style: h
    16.62s  user  발화 시작: Actually, never mind. What's the weather in Lagos right now?
    16.62s  agent 발화 끝
    20.31s  agent 발화 시작: <ret> Of course. Lagos is currently twenty-eight degrees Cel
    20.31s  <ret> 발화 (turn3 첫 프레임)
    20.31s  user  발화 끝
    20.87s  ⚡SPAN 주입 [d'=0.56s / d_lead=0.74s]: Lagos, Nigeria: 28 degrees Celsius. Partly cloudy. Humidity: 75%. Wind
    30.28s  user  발화 시작: And um… what about Abuja?
    30.28s  agent 발화 끝
    32.13s  agent 발화 시작: <ret> Let me see. Abuja is thirty-two degrees Celsius and cl
    32.13s  <ret> 발화 (turn5 첫 프레임)
    32.13s  user  발화 끝
    32.77s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.11s]: Abuja, Nigeria: 32 degrees Celsius. Clear skies. Humidity: 60%. Wind: 
    42.10s  user  발화 시작: Hmm, okay. [sigh] Is there a good restaurant nearby— I mean,
    42.10s  agent 발화 끝
    48.01s  agent 발화 시작: That’s a delightful thought. Traditional Nigerian cuisine is
    48.01s  user  발화 끝
    51.70s  agent 발화 끝
