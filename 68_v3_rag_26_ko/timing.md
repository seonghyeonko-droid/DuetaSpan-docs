# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "윤원",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-10-05",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-15",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-12",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 전기의 대부분은 어디서 얻는 걸까요? | S2 신재생 에너지… 좋네요. | S3 줄어든다니 다행이네요. 혹시 증기 터빈에 대해 아시나요? | S4 아, 그렇군요. 신기하네요.

     0.00s  user  발화 시작: 혹시 전기의 대부분은 어디서 얻는 걸까요?
     2.95s  user  발화 끝
     2.97s  agent 발화 시작: 전기의 생산 방식은 여러 가지가 있지만, 주로 화석 연료를 태워서 얻고 있어요.
     7.69s  agent 발화 끝
     7.72s  user  발화 시작: 화석 연료요? 좀 더 자세히 알려주시겠어요?
    10.73s  <ret> 발화 (turn3 첫 프레임)
    11.04s  agent 발화 시작: <ret> 석탄이 가장 풍부한 화석 연료인데, 주로 식물성 물질이 탄화된 검거나 갈색의 퇴적암이에요.
    11.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: Coal is a combustible black or brownish-black sedimentary rock compose
    11.14s  user  발화 끝
    17.34s  agent 발화 끝
    18.19s  user  발화 시작: 아, 석탄이군요. 그럼 석탄 말고 다른 에너지원은 없나요?
    22.88s  agent 발화 시작: 수력, 풍력, 태양광 같은 신재생 에너지도 점점 더 많이 사용하고 있어요.
    23.05s  user  발화 끝
    25.19s  user  발화 시작: 네.
    25.83s  user  발화 끝
    27.29s  user  발화 시작: 신재생 에너지… 좋네요.
    27.50s  agent 발화 끝
    30.06s  agent 발화 시작: 신재생 에너지는 환경에 미치는 영향이 적어서 앞으로 더욱 중요해질 거예요.
    30.20s  user  발화 끝
    34.55s  agent 발화 끝
    34.63s  user  발화 시작: 그럼 석탄 발전은 앞으로 어떻게 되는 걸까요?
    37.77s  user  발화 끝
    37.98s  agent 발화 시작: 석탄 발전은 탄소 배출량이 많아서 점차 줄어들고 있어요.
    41.95s  user  발화 시작: 줄어든다니 다행이네요. 혹시 증기 터빈에 대해 아시나요?
    41.96s  agent 발화 끝
    46.05s  <ret> 발화 (turn12 첫 프레임)
    46.11s  agent 발화 시작: <ret> 현대 증기 터빈은 천팔백팔십사년에 찰스 파슨스 경이 발명했어요.
    46.11s  user  발화 끝
    46.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: The modern steam turbine was invented in 1884 by Sir Charles Algernon 
    48.10s  user  발화 시작: 네.
    48.73s  user  발화 끝
    51.51s  user  발화 시작: 찰스 파슨스 경… 처음 듣는 이름인데요.
    51.62s  agent 발화 끝
    55.10s  agent 발화 시작: 증기 터빈은 발전 효율이 높아서 전기를 생산하는 데 아주 중요한 역할을 하고 있어요.
    55.15s  user  발화 끝
    58.47s  user  발화 시작: 네.
    59.29s  user  발화 끝
    60.32s  user  발화 시작: 발전 효율이 높다는 게 어떤 뜻인가요?
    60.52s  agent 발화 끝
    63.27s  user  발화 끝
    63.37s  agent 발화 시작: 연료를 적게 사용하면서도 많은 전기를 만들 수 있다는 의미예요.
    67.45s  agent 발화 끝
    67.62s  user  발화 시작: 아, 그렇군요. 신기하네요.
    69.97s  user  발화 끝
    70.19s  agent 발화 시작: 에너지를 효율적으로 사용하는 것은 환경 보호에도 도움이 된답니다.
    73.11s  user  발화 시작: 네.
    73.55s  user  발화 끝
    74.40s  agent 발화 끝
    74.71s  user  발화 시작: 그렇군요. 오늘 좋은 정보 많이 얻어 가요. 감사합니다.
    78.96s  user  발화 끝
    78.98s  agent 발화 시작: 도움이 되었다니 기쁘네요.
    80.77s  agent 발화 끝
