# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was wondering about the name du Plessis… it’s quite common
     6.18s  agent 발화 시작: It’s a lovely name, and often carries a sense of history. Ma
     6.25s  user  발화 끝
    12.15s  user  발화 시작: Mhm.
    12.78s  user  발화 끝
    14.19s  agent 발화 끝
    14.34s  user  발화 시작: But where does it *come* from, originally? Is it French, may
    17.87s  <ret> 발화 (turn4 첫 프레임)
    18.23s  user  발화 끝
    18.27s  agent 발화 시작: <ret> The name’s origins are actually quite interesting. The
    19.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.66s]: Du Plessis is a French surname originating as a topographic name for s
    27.78s  agent 발화 끝
    27.88s  user  발화 시작: A manor house… so it’s definitely French then? That makes se
    33.42s  agent 발화 시작: It is indeed French in origin, though its spread is more com
    33.53s  user  발화 끝
    40.84s  agent 발화 끝
