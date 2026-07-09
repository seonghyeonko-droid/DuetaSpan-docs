# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: 하재 · Location: Busan, South Korea · Nationality: Korean · Gender: female · Age: 40s · TZ: Asia/Seoul (KST, UTC+9) · Currency: KRW (₩)
#   B. 저장 메모리:
#      [2026-06-02] User's home address is 389 Maple Drive.
#      [2026-03-10] User is planning a trip to Vietnam in August.
#      [2026-03-09] User has a Poodle named Coco.
#      [2026-02-26] User prefers a window seat when traveling.
#   B. 과거 대화 요약:
#      [2026-06-20] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-02-28] Comparing gym memberships — wants a pool; close to the office

# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명인가요? | S2 흥미롭네요. 그분은 민주당이신가요? | S3 경력이 많으신가요? | S4 음-흠. 어떤 종류의 법을 전문으로 하셨나요?

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명인가요?
     2.17s  <ret> 발화 (turn1 첫 프레임)
     2.31s  user  발화 끝
     2.41s  agent 발화 시작: <ret> 네, 좋은 질문이세요. 다른 정부의 구조를 이해하시는군요— 죄송하지만 현재 그 특정 숫자를 알려드
     2.67s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.97s]: (no information found)
     7.59s  user  발화 시작: 네.
     8.13s  user  발화 끝
    13.36s  agent 발화 끝
    14.68s  user  발화 시작: 음, 알겠습니다. 미국 상원은 몇 명의 상원 의원이 있나요?
    18.97s  <ret> 발화 (turn4 첫 프레임)
    19.21s  agent 발화 시작: <ret> 아, 미국 상원은 제가 쉽게 도와드릴 수 있는 부분이에요— 미국 상원에는 각 주를 대표하는 두 명
    19.39s  user  발화 끝
    20.73s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.17s]: The United States Senate is composed of one hundred senators, two from
    24.35s  user  발화 시작: 음.
    24.79s  user  발화 끝
    27.44s  user  발화 시작: 맞아요. 현재 상원 의장 대행은 누구인가요?
    27.55s  agent 발화 끝
    30.45s  <ret> 발화 (turn7 첫 프레임)
    30.68s  user  발화 끝
    30.69s  agent 발화 시작: <ret> 그건 주기적으로 바뀌는 자리이긴 합니다— 현재 패티 머레이 님이 상원 의장 대행을 맡고 있습니다.
    31.65s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.23s]: As of November 29, 2023, Patty Murray is the President Pro Tempore of 
    36.34s  agent 발화 끝
    36.49s  user  발화 시작: 흥미롭네요. 그분은 민주당이신가요?
    38.71s  <ret> 발화 (turn9 첫 프레임)
    38.87s  agent 발화 시작: <ret> 네, 맞습니다— 패티 머레이 님은 워싱턴 주를 대표하는 민주당 소속입니다.
    38.98s  user  발화 끝
    39.21s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.64s]: Patty Murray is a member of the Democratic Party, representing Washing
    40.62s  user  발화 시작: 네.
    41.02s  user  발화 끝
    44.34s  agent 발화 끝
    44.47s  user  발화 시작: 하원 의장은 누구인가요?
    46.04s  <ret> 발화 (turn12 첫 프레임)
    46.22s  user  발화 끝
    46.36s  agent 발화 시작: <ret> 현재 하원 의장을 확인해 볼게요— 마이크 존슨 님이 지난 10월에 하원 의장으로 선출되었습니다.
    47.96s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.20s]: (tool result) Mike Johnson is the current Speaker of the House, electe
    52.43s  agent 발화 끝
    54.43s  user  발화 시작: 10월요? 와, 정말 최근이네요. 그분은 루이지애나 출신인가요?
    58.21s  <ret> 발화 (turn14 첫 프레임)
    58.53s  agent 발화 시작: <ret> 네, 루이지애나 주를 대표합니다— 루이지애나 주 제4선거구 출마하셨습니다.
    58.68s  user  발화 끝
    59.25s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.41s]: Mike Johnson represents Louisiana's 4th congressional district in the 
    63.28s  user  발화 시작: 경력이 많으신가요?
    63.35s  agent 발화 끝
    64.51s  agent 발화 시작: —그분은 이미 몇 년 동안 의회에서 활동하셨습니다—
    64.52s  user  발화 끝
    67.33s  user  발화 시작: 의회에 들어가기 전에는요? 뭘 하셨나요?
    67.89s  agent 발화 끝
    69.81s  <ret> 발화 (turn18 첫 프레임)
    69.89s  agent 발화 시작: <ret> 의회에 들어가기 전에는 변호사로 활동하셨습니다— 이전에 헌법 변호사로 일하셨습니다.
    70.05s  user  발화 끝
    70.85s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.61s]: Prior to his political career, Mike Johnson worked as a constitutional
    73.61s  user  발화 시작: 네.
    73.96s  user  발화 끝
    75.31s  agent 발화 끝
    75.74s  user  발화 시작: 그렇군요. 변호사에서 정치인으로 변신하셨네요.
    78.60s  agent 발화 시작: 흔한 길이죠— 많은 분들이 기술이 잘 옮겨 간다고 생각합니다—
    78.65s  user  발화 끝
    81.71s  user  발화 시작: 음-흠. 어떤 종류의 법을 전문으로 하셨나요?
    82.30s  agent 발화 끝
    84.39s  <ret> 발화 (turn23 첫 프레임)
    84.71s  agent 발화 시작: <ret> 좀 더 구체적인 내용인데, 한번 찾아보겠습니다— 그분은 상소 및 헌법 관련 법을 전문으로 하셨습니
    84.72s  user  발화 끝
    86.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.90s]: Mike Johnson specialized in appellate and constitutional law at a priv
    89.21s  user  발화 시작: 네.
    89.57s  user  발화 끝
    91.57s  agent 발화 끝
    91.81s  user  발화 시작: 헌법 관련 법이군요. 그게 다 설명되네요.
    94.60s  agent 발화 시작: [laugh] 거버넌스를 이해하는 데 튼튼한 기반을 제공하는 경우가 많습니다.
    94.78s  user  발화 끝
   100.25s  agent 발화 끝
   100.26s  user  발화 시작: 그렇다면 보수적인 성향이 강하신가요?
   102.43s  agent 발화 시작: 네, 일반적으로 보수적인 원칙에 부합합니다—
   102.56s  user  발화 끝
   105.19s  <ret> 발화 (turn29 첫 프레임)
   105.34s  agent 발화 시작: <ret> 사회적으로 보수적인 견해를 가지고 있는 것으로 알려져 있습니다.
   105.39s  agent 발화 끝
   106.15s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.84s]: Mike Johnson is known for his socially conservative and constitutional
   109.18s  agent 발화 끝
