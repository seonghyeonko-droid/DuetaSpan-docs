# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 무슨 정부 형태를 무정부주의자들이 싫어하는지 궁금해?
     3.32s  <ret> 발화 (turn1 첫 프레임)
     3.64s  agent 발화 시작: <ret> 음, 딱히 무정부주의자들이 널리 반대하는 정부 형태는 못 찾았어.
     3.75s  user  발화 끝
     5.24s  ⚡SPAN 주입 [d'=1.92s / d_lead=2.99s]: (no information found)
     8.13s  agent 발화 끝
     8.31s  user  발화 시작: 아. 그럼… 민주주의 같은 가장 흔한 형태는 어때?
    11.75s  <ret> 발화 (turn3 첫 프레임)
    11.82s  agent 발화 시작: <ret> [laugh] 그건 좋은 질문이야.
    12.02s  user  발화 끝
    13.03s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.19s]: “Anarchists oppose the state as an inherently coercive institution, vi
    14.79s  agent 발화 시작: 무정부주의자들은 민주주의를 포함한 모든 형태의 정부에 반대해. 국가는 강압적이고 부당하다고 보는 거야.
    15.01s  agent 발화 끝
    22.67s  agent 발화 끝
    22.82s  user  발화 시작: 그래, 그러니까 정부는 어떤 것도 안 좋아하네. 그럼 가장 오래된 정부 형태는 뭔데?
    27.11s  <ret> 발화 (turn6 첫 프레임)
    27.35s  agent 발화 시작: <ret> 그건 아주 흥미로운 역사적 질문인데. 군주제가 가장 오래된 형태로 여겨져. 메소포타미아나 이집트 
    27.50s  user  발화 끝
    28.07s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.95s]: “Monarchy is generally considered the oldest form of government, origi
    35.66s  user  발화 시작: 흐음. 무정부주의자 군주가 있었어?
    36.20s  agent 발화 끝
    39.08s  <ret> 발화 (turn8 첫 프레임)
    39.23s  agent 발화 시작: <ret> [surprised] 그건… 좀 뜻밖의 조합인데!
    39.40s  user  발화 끝
    40.04s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.17s]: (no information found)
    41.39s  agent 발화 시작: 무정부주의자라고 밝힌 군주에 대한 기록은 못 찾았어. 완전 모순이잖아!
    41.41s  agent 발화 끝
    43.53s  user  발화 시작: 응.
    43.89s  user  발화 끝
    46.11s  agent 발화 끝
    47.33s  user  발화 시작: 그래, 그렇겠지. 그럼 유명한 무정부주의 사상가는 누구야?
    50.75s  <ret> 발화 (turn12 첫 프레임)
    51.12s  user  발화 끝
    51.13s  agent 발화 시작: <ret> 이제 그건 내가 잘 아는 주제야. 피에르 조제프 프루동은 종종 “무정부주의의 아버지”라고 불려. 
    52.35s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.93s]: “Pierre-Joseph Proudhon is often considered the ‘father of anarchism’,
    59.48s  agent 발화 끝
    59.74s  user  발화 시작: 상호주의? 그게 대체 무슨 뜻이야?
    61.67s  <ret> 발화 (turn14 첫 프레임)
    61.81s  agent 발화 시작: <ret> 사실은 상호 교환을 기반으로 하는 시스템이야.
    62.00s  user  발화 끝
    63.43s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.24s]: “Mutualism proposes a society where individuals and groups engage in v
    64.98s  agent 발화 시작: 상호주의는 이윤을 추구하지 않고 상품과 서비스를 자발적으로 교환하는 것을 제안해.
    65.05s  agent 발화 끝
    72.08s  agent 발화 끝
    73.12s  user  발화 시작: 그러니까 아무도 돈을 안 벌어?
    74.38s  <ret> 발화 (turn17 첫 프레임)
    74.61s  agent 발화 시작: <ret> 전통적인 의미로는 그렇지 않아. 공정한 교환에 더 가깝지.
    74.74s  user  발화 끝
    75.58s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.98s]: “Mutualists believe in fair compensation for labor, based on the amoun
    78.48s  agent 발화 시작: 보수는 자본이나 투자보다는 수행한 작업에 따라 결정돼.
    78.59s  agent 발화 끝
    82.93s  agent 발화 끝
    83.78s  user  발화 시작: 그건… 복잡하네. 물물교환 같은 거야?
    87.02s  <ret> 발화 (turn20 첫 프레임)
    87.10s  agent 발화 시작: <ret> 비슷하지만 더 체계적이고 신용 시스템이 포함되어 있어.
    87.19s  user  발화 끝
    88.70s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.05s]: (no information found)
    89.99s  agent 발화 시작: 단순한 물물교환을 넘어서 신용과 상호 합의를 포함하는 거야.
    90.15s  agent 발화 끝
    93.22s  agent 발화 끝
