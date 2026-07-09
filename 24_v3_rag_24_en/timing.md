# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was wondering about the name Du Plessis… it sounds French,
     4.85s  <ret> 발화 (turn1 첫 프레임)
     4.93s  agent 발화 시작: <ret> It certainly has a European feel, doesn’t it? The name
     5.19s  user  발화 끝
     5.89s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.70s]: Du Plessis is a French surname originating as a topographic name for s
    10.62s  agent 발화 끝
    10.69s  agent 발화 시작: Interestingly, the name’s story begins… Du Plessis originate
    18.22s  user  발화 시작: Mhm.
    18.71s  user  발화 끝
    20.71s  agent 발화 끝
    20.94s  user  발화 시작: Oh, France! That makes sense. But I’ve met a lot of South Af
    27.07s  <ret> 발화 (turn5 첫 프레임)
    27.19s  user  발화 끝
    27.31s  agent 발화 시작: <ret> You’re right to notice that connection. Many families 
    29.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.16s]: Huguenots fleeing religious persecution in France brought the surname 
    33.47s  agent 발화 끝
    33.53s  agent 발화 시작: The surname traveled… Huguenots fleeing France brought the n
    40.39s  agent 발화 끝
    40.60s  user  발화 시작: So it’s a Huguenot name? That’s fascinating! Did they change
    46.69s  <ret> 발화 (turn8 첫 프레임)
    46.75s  user  발화 끝
    46.84s  agent 발화 시작: <ret> Sometimes names evolve as they travel, and that happen
    48.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.98s]: In Afrikaans, the name became spelled as Du Plessis, retaining the ori
    50.64s  agent 발화 시작: The spelling did adapt… In Afrikaans, the name became spelle
    50.82s  agent 발화 끝
    58.71s  agent 발화 끝
