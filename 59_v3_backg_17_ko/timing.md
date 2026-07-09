# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 심장이 건강하면 분당 몇 번 뛰는 게 정상이야?
     2.92s  <ret> 발화 (turn1 첫 프레임)
     3.07s  agent 발화 시작: <ret> 건강한 사람의 심박수는 분당 50회에서 90회 정도래.
     3.33s  user  발화 끝
     3.42s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.03s]: A normal resting heart rate for adults ranges from 60 to 100 bpm.
     7.10s  agent 발화 끝
     7.19s  agent 발화 시작: 보통 성인의 안정 시 심박수는 분당 60회에서 100회 사이야.
    10.02s  user  발화 시작: Wow.
    10.85s  user  발화 끝
    11.68s  agent 발화 끝
    12.55s  user  발화 시작: 아, 그럼 내가 55번인데 괜찮은 거야?
    14.90s  user  발화 시작: 아, 진짜, 또 고양이 털이야!
    14.96s  user  발화 끝
    17.18s  agent 발화 시작: 55번이면 아주 건강한 심박수네. 걱정하지 않아도 돼.
    17.26s  user  발화 끝
    21.35s  agent 발화 끝
