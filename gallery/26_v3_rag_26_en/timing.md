# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, uh, I was wondering… what country has a flag that’s blac
     4.73s  <ret> 발화 (turn1 첫 프레임)
     4.95s  agent 발화 시작: <ret> That's a curious question, prompting a look at nationa
     5.14s  user  발화 끝
     6.49s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.12s]: The flag of Germany is composed of three horizontal bands of black, re
     9.03s  agent 발화 시작: The flag of Germany features black, red, and gold horizontal
     9.07s  agent 발화 끝
    10.49s  user  발화 시작: Yeah.
    10.95s  user  발화 끝
    13.98s  agent 발화 끝
    14.28s  user  발화 시작: Oh, interesting. Did those colors always represent Germany?
    18.41s  <ret> 발화 (turn5 첫 프레임)
    18.49s  user  발화 끝
    18.72s  agent 발화 시작: <ret> The symbolism has evolved over time, certainly.
    19.53s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.17s]: The black, red, and gold colors were adopted in 1848 during the German
    21.73s  agent 발화 시작: Those colors were adopted in eighteen forty-eight, represent
    21.89s  agent 발화 끝
    23.69s  user  발화 시작: Yeah, yeah.
    24.51s  user  발화 끝
    27.83s  user  발화 시작: That’s neat. I was reading about trade routes… did Germany h
    27.85s  agent 발화 끝
    33.70s  <ret> 발화 (turn9 첫 프레임)
    34.09s  agent 발화 시작: <ret> Indeed, trade networks extended quite far, even then.
    34.32s  user  발화 끝
    35.30s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.02s]: From the seventeenth to the nineteenth centuries, German merchants tra
    38.08s  agent 발화 시작: German merchants traded textiles with West African kingdoms 
    38.11s  agent 발화 끝
    45.36s  agent 발화 끝
    45.64s  user  발화 시작: Wow, textiles for gold… that’s quite a deal. Were there spec
    52.10s  <ret> 발화 (turn12 첫 프레임)
    52.36s  user  발화 끝
    52.41s  agent 발화 시작: <ret> Some kingdoms proved more reliable trading partners th
    54.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: The Gold Coast, now Ghana, was a key trading partner with German merch
    56.87s  agent 발화 시작: The Gold Coast, now Ghana, was a key trading partner, offeri
    56.95s  agent 발화 끝
    63.08s  agent 발화 끝
