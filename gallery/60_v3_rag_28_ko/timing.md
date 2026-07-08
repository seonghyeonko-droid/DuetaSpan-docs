# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 옛날에 향신료 무역을 누가 장악했어? 다들 영국이라고 생각하는데, 진짜 그랬어?
     5.85s  agent 발화 시작: 흔히 그렇게 생각하시는데, 사실은 영국이 나중에 영향력을 행사하기 시작했어요.
     6.06s  user  발화 끝
    11.23s  <ret> 발화 (turn2 첫 프레임)
    11.83s  agent 발화 시작: <ret> 음, 역사적으로는… 포르투갈 제국이 16세기에 아시아로 가는 향신료 항로를 독점했거든요.
    11.96s  agent 발화 끝
    12.23s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.43s]: The Portuguese Empire established a monopoly over the spice trade rout
    18.95s  agent 발화 끝
    20.99s  user  발화 시작: 포르투갈? 진짜? 난 항상 네덜란드나 다른 누군가인 줄 알았어.
    25.33s  user  발화 끝
    25.48s  agent 발화 시작: 네덜란드도 중요한 역할을 했지만, 포르투갈이 먼저 우위를 점한 후에 세력을 키웠어요.
    31.08s  <ret> 발화 (turn5 첫 프레임)
    31.67s  agent 발화 시작: <ret> 시간 순서대로 말씀드리면… 아폰수 드 알부케르케가 1515년에 리스본에서 말라카까지 해상 항로를 
    31.69s  agent 발화 끝
    32.08s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.45s]: Afonso de Albuquerque, in 1515, secured Portuguese control of the sea 
    42.53s  user  발화 시작: 근데 다른 집단들은—
    42.57s  agent 발화 끝
    44.18s  user  발화 끝
    44.42s  agent 발화 시작: 포르투갈은 처음에는 주요 항구를 통제하는 데 집중했어요—
    47.95s  user  발화 시작: …아랍 상인들은 어땠어? 그냥 완전히 밀려났어?
    48.72s  agent 발화 끝
    50.93s  agent 발화 시작: 좋은 질문이에요. 포르투갈이 처음부터 기존의 모든 무역망을 없애지는 못했어요.
    51.00s  user  발화 끝
    56.11s  <ret> 발화 (turn10 첫 프레임)
    56.70s  agent 발화 시작: <ret> 그렇게 단순하게 보기에는… 아랍 상인들은 포르투갈이 15세기 말에 도착하기 전부터 인도양 무역을 
    56.81s  agent 발화 끝
    57.11s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.15s]: Arab traders had long dominated Indian Ocean trade before the Portugue
    61.69s  user  발화 시작: 응.
    61.91s  user  발화 끝
    65.60s  agent 발화 끝
    65.74s  agent 발화 시작: 포르투갈의 해군력이 강해지면서 그들의 영향력은 줄어들었지만, 처음에는 완전히 밀려나지는 않았어요. 점진적으로
    75.67s  agent 발화 끝
