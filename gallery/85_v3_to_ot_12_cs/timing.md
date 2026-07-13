# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Manon",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-03",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 모시 씨, '로브 좀비의 할로윈'에서 마이클 마이 | S2 좋아요! 티켓을 예매할게요. | S3 늘 좋은 조언을 해주시네요, 모시 씨. 부산 날씨는 지금 어때 | S4 정말 완벽하네요! 인사동은 좋은 지역이에요.

     0.00s  user  발화 시작: 안녕하세요, 모시 씨, '로브 좀비의 할로윈'에서 마이클 마이어스를 연기한 사람이 누구인지 아세요?
     6.00s  <ret> 발화 (turn1 첫 프레임)
     6.28s  agent 발화 시작: <ret> 음, 그건 데이그 페어치야. 로브 좀비의 이천칠년 할로윈과 그 후속작에서 어린 마이클 마이어스 역
     6.28s  user  발화 끝
     6.30s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.85s]: Daeg Faerch portrayed young Michael Myers in Rob Zombie’s 2007 remake 
    14.13s  user  발화 시작: 네네.
    14.13s  agent 발화 끝
    14.65s  user  발화 시작: 아, 흥미롭네요. 어렸을 때 연기한 배우였던 줄은 몰랐어요.
    14.65s  user  발화 끝
    18.84s  agent 발화 시작: 쉽게 잊어버리잖아, 그렇지? 보통 그런 역할은 어른들이 어려 보이게 분장하는 경우가 많아.
    18.84s  user  발화 끝
    25.11s  user  발화 시작: 네, 맞아요. 영화 얘기 김에, 오늘 그랜드 시네마에서 뭘 상영하나요?
    25.11s  agent 발화 끝
    30.29s  <ret> 발화 (turn7 첫 프레임)
    30.35s  agent 발화 시작: 아.
    30.35s  user  발화 끝
    30.87s  agent 발화 시작: <ret> 오늘 그랜드 시네마에서는 '다락방의 유령'을 일곱시랑 아홉시 삼십분에, 그리고 '스페이스 익스플로
    30.87s  agent 발화 끝
    31.79s  ⚡SPAN 주입 [d'=1.50s / d_lead=8.37s]: (tool result) Grand Cinema: “The Haunting in the Attic” (7:00 PM, 9:30
    39.24s  user  발화 시작: 음.
    39.24s  agent 발화 끝
    39.77s  user  발화 시작: 음, '다락방의 유령'이 괜찮겠네요. 일곱시 상영분에 자리가 있는지 확인해 주시겠어요?
    39.77s  user  발화 끝
    45.00s  agent 발화 시작: 네.
    45.00s  user  발화 끝
    45.14s  <ret> 발화 (turn11 첫 프레임)
    45.52s  agent 발화 시작: <ret> 현재 '다락방의 유령' 일곱시 상영분에 스물세 자리 남아 있어.
    45.52s  agent 발화 끝
    46.19s  ⚡SPAN 주입 [d'=1.05s / d_lead=4.71s]: (tool result) Grand Cinema: “The Haunting in the Attic” 7:00 PM - 23 s
    50.23s  user  발화 시작: 좋아요! 티켓을 예매할게요.
    50.23s  agent 발화 끝
    51.80s  agent 발화 시작: 좋은 저녁 계획이네. 영화 즐겁게 봐.
    51.80s  user  발화 끝
    54.94s  user  발화 시작: 그렇죠.
    54.94s  agent 발화 끝
    55.46s  user  발화 시작: 잠깐만요, 마크한테 말해야 해서…
    55.46s  user  발화 끝
    57.55s  user  발화 시작: 미안해요. 다음 주에 이 선생님 진료 예약 시간이 몇 시인지 다시 알려주시겠어요?
    57.55s  user  발화 끝
    63.50s  <ret> 발화 (turn17 첫 프레임)
    63.83s  agent 발화 시작: <ret> 다음 주 화요일 오후 두시에 이 선생님 진료 예약되어 있어.
    63.83s  user  발화 끝
    64.62s  ⚡SPAN 주입 [d'=1.13s / d_lead=5.23s]: [2024-07-17] I have a doctor’s appointment with Dr. Lee next Tuesday a
    69.07s  user  발화 시작: 예.
    69.07s  agent 발화 끝
    69.59s  user  발화 시작: 아, 맞다! 알려주셔서 감사합니다. 저는 항상 이런 걸 잊어버리네요.
    69.59s  user  발화 끝
    74.30s  agent 발화 시작: 약속이 많으면 정신이 없을 수밖에 없어. 그럴 때는 자기 자신에게 관대해지는 게 도움이 될 거야.
    74.30s  user  발화 끝
    82.15s  user  발화 시작: 늘 좋은 조언을 해주시네요, 모시 씨. 부산 날씨는 지금 어때요?
    82.15s  agent 발화 끝
    86.91s  <ret> 발화 (turn22 첫 프레임)
    87.38s  agent 발화 시작: <ret> 현재 부산 날씨는 섭씨 이십팔 점 삼도이고, 습도는 육십팔 퍼센트, 구름이 조금 낀 하늘이야.
    87.38s  user  발화 끝
    88.27s  ⚡SPAN 주입 [d'=1.35s / d_lead=7.33s]: (tool result) Busan: 28.3°C, humidity 68%, wind 7.2 km/h, partly cloud
    94.70s  user  발화 시작: 네.
    94.70s  agent 발화 끝
    95.23s  user  발화 시작: 좋네요. 여기보다 따뜻하네요.
    95.23s  user  발화 끝
    96.80s  agent 발화 시작: 아.
    96.80s  user  발화 끝
    97.32s  agent 발화 시작: 기분 전환하기에는 딱 좋은 날씨네.
    97.32s  agent 발화 끝
    99.94s  user  발화 시작: 사실 다음 달에 서울 여행을 계획하고 있어요.
    99.94s  agent 발화 끝
   103.60s  agent 발화 시작: 네.
   103.60s  user  발화 끝
   104.12s  agent 발화 시작: 서울은 활기 넘치는 도시지! 거기서 뭘 하고 싶어?
   104.12s  agent 발화 끝
   108.31s  user  발화 시작: 전통 한국 찻집을 찾아보고 싶어요. 좋은 곳 아세요?
   108.31s  agent 발화 끝
   112.16s  <ret> 발화 (turn31 첫 프레임)
   112.49s  agent 발화 시작: <ret> 인사동에 있는 뜰안 차집이 별점 사 점 오개이고, 전통 한국 차와 간식으로 유명해.
   112.49s  user  발화 끝
   113.17s  ⚡SPAN 주입 [d'=1.01s / d_lead=6.80s]: (tool result) Tteuran Tea House (Insadong): 4.5 stars, traditional Kor
   119.30s  user  발화 시작: 정말 완벽하네요! 인사동은 좋은 지역이에요.
   119.30s  agent 발화 끝
   121.91s  agent 발화 시작: 그래! 역사와 문화가 가득한 아름다운 동네야.
   121.91s  user  발화 끝
   125.05s  user  발화 시작: 내일 아침 여섯시 삼십분에 알람 설정해 주세요.
   125.05s  agent 발화 끝
   128.25s  <ret> 발화 (turn35 첫 프레임)
   128.71s  agent 발화 시작: <ret> 내일 아침 여섯시 삼십분에 알람이 설정됐어.
   128.71s  user  발화 끝
   129.25s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.14s]: (tool result) Alarm set for 6:30 AM tomorrow.
   131.85s  user  발화 시작: 맞아요.
   131.85s  agent 발화 끝
   132.38s  user  발화 시작: 정말 감사합니다, 모시 씨.
   132.38s  user  발화 끝
   134.47s  agent 발화 시작: 고마워. 자기 자신을 아끼고, 편히 쉬어.
   134.47s  user  발화 끝
   137.61s  agent 발화 끝
