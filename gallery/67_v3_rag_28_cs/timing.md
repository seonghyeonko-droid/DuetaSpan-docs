# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 그러니까, 옛날에 향신료 무역을 누가 진짜로 장악했어? 다들 영국이라고 생각하는데, 진짜 그래?
     5.64s  agent 발화 시작: 사실 흔히 오해하시는 부분이에요. 영국은 훨씬 나중에 영향력을 행사하기 시작했거든요.
     5.79s  user  발화 끝
    10.94s  <ret> 발화 (turn2 첫 프레임)
    11.42s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.30s]: The Portuguese Empire established a monopoly over the spice trade rout
    11.53s  agent 발화 시작: <ret> 음, 역사적으로는… 포르투갈 제국이 16세기에 아시아로 가는 향신료 항로를 독점했었어요.
    11.61s  agent 발화 끝
    18.01s  agent 발화 끝
    18.57s  user  발화 시작: 포르투갈? 진짜? 난 항상 네덜란드나 다른 누군가라고 생각했어.
    22.93s  user  발화 끝
    23.28s  agent 발화 시작: 네덜란드도 중요한 역할을 했지만, 그들의 부상은 포르투갈이 먼저 지배적인 위치를 차지한 후에 일어났어요.
    30.05s  <ret> 발화 (turn5 첫 프레임)
    30.64s  agent 발화 시작: <ret> 시간 순서대로 보면 그런 것 같아요… 아폰수 드 알부케르케가 1515년에 리스본에서 말라카까지의 
    30.74s  agent 발화 끝
    31.05s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.12s]: Afonso de Albuquerque, in 1515, secured Portuguese control of the sea 
    40.65s  agent 발화 끝
    40.73s  user  발화 시작: 근데 다른 집단들은—
    42.29s  agent 발화 시작: 포르투갈은 처음에는 주요 항구를 통제하는 데 집중했어요—
    42.48s  user  발화 끝
    45.22s  user  발화 시작: …아랍 상인들은 어땠어? 그냥 완전히 밀려났어?
    46.03s  agent 발화 끝
    48.12s  agent 발화 시작: 좋은 질문이에요. 포르투갈이 기존의 모든 무역망을 즉시 없애지는 못했어요.
    48.27s  user  발화 끝
    52.62s  <ret> 발화 (turn10 첫 프레임)
    53.20s  agent 발화 시작: <ret> 그렇게 단순하게 보기에는 너무 그래요… 포르투갈인들이 15세기 말에 도착하기 전까지 아랍 상인들이
    53.45s  agent 발화 끝
    53.62s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.10s]: Arab traders had long dominated Indian Ocean trade before the Portugue
    58.72s  user  발화 시작: 응.
    59.17s  user  발화 끝
    63.11s  agent 발화 시작: 그들의 영향력은 포르투갈 해군력이 증가하면서 줄어들었지만, 처음에는 완전히 몰락하지는 않았어요. 점진적인 변
    63.17s  agent 발화 끝
    71.13s  agent 발화 끝
