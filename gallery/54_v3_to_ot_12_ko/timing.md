# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "보연",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-26",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-10-01",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-06-06",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 '마지막 여름 와인'에 나오는 월리 역을 누가 맡았는지  | S2 잠깐만, 아까 그 얘기는… | S3 정말 오래됐네요. 그땐 제가 어렸을 때였어요. | S4 덥네요. 에어컨을 켜야겠어요.

     0.00s  user  발화 시작: 혹시 '마지막 여름 와인'에 나오는 월리 역을 누가 맡았는지 아세요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.02s  <ret> 발화 (turn5 첫 프레임)
     0.04s  agent 발화 시작: <ret> '마지막 여름 와인'의 월리 역은 조셉 글래드윈 씨가 맡으셨습니다. 정말 유명한 드라마죠.
     0.04s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Joseph Gladwin played Wally in Last of the Summer Wine.
     0.04s  user  발화 끝
     0.10s  user  발화 시작: 아, 맞아요. 그분 연기가 참 좋았죠.
     0.10s  agent 발화 끝
     0.12s  agent 발화 시작: 네, 조셉 글래드윈 씨는 여러 작품에서 인상적인 연기를 보여주셨습니다.
     0.12s  user  발화 끝
     0.16s  user  발화 시작: 음… 다른 드라마에서도 활동하셨나요?
     0.16s  agent 발화 끝
     0.18s  agent 발화 시작: <ret> 조셉 글래드윈 씨는 '코로네이션 스트리트'에도 출연하셨습니다. 꽤 다양한 역할을 소화하셨죠.
     0.18s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: Joseph Gladwin also appeared in Coronation Street.
     0.18s  user  발화 끝
     0.22s  user  발화 시작: 코로네이션 스트리트요? 들어본 것 같아요.
     0.22s  agent 발화 끝
     0.25s  agent 발화 시작: 네, 영국에서 오랫동안 방영된 드라마입니다. 혹시 다른 궁금한 배우가 있으신가요?
     0.25s  user  발화 끝
     0.29s  user  발화 시작: 잠깐만, 아까 그 얘기는…
     0.29s  agent 발화 끝
     0.31s  user  발화 시작: (다시 돌아와서) 아니, 그냥요. 지금은 괜찮아요.
     0.31s  user  발화 끝
     0.33s  agent 발화 시작: 혹시 여행 계획을 세우는 데 도움이 필요하시면 언제든지 말씀해주세요.
     0.33s  user  발화 끝
     0.37s  user  발화 시작: 아.
     0.37s  agent 발화 끝
     0.38s  user  발화 시작: 여행이요? 지금은 그냥 드라마 얘기가 하고 싶어요.
     0.38s  user  발화 끝
     0.39s  <ret> 발화 (turn24 첫 프레임)
     0.40s  <ret> 발화 (turn16 첫 프레임)
     0.41s  agent 발화 시작: 드라마에 대해 더 궁금한 점이 있으시면 언제든 물어보세요.
     0.41s  user  발화 끝
     0.44s  user  발화 시작: 그렇죠.
     0.44s  agent 발화 끝
     0.45s  user  발화 시작: 그럼, '마지막 여름 와인'은 얼마나 오랫동안 방영됐죠?
     0.45s  user  발화 끝
     0.48s  agent 발화 시작: <ret> '마지막 여름 와인'은 천구백칠십삼년부터 이천칠년까지 총 서른한개의 시리즈로 방영되었습니다. 무려
     0.48s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: Last of the Summer Wine ran for 31 series, from 1973 to 2007.
     0.48s  user  발화 끝
     0.54s  user  발화 시작: 예.
     0.54s  agent 발화 끝
     0.54s  user  발화 시작: 정말 오래됐네요. 그땐 제가 어렸을 때였어요.
     0.54s  user  발화 끝
     0.55s  <ret> 발화 (turn26 첫 프레임)
     0.57s  agent 발화 시작: 시간이 정말 빠르네요. 추억을 떠올리게 하는 드라마인 것 같습니다.
     0.57s  user  발화 끝
     0.61s  user  발화 시작: 네, 그렇죠. 혹시 지금 방영 중인 드라마도 추천해 주실 수 있나요?
     0.61s  agent 발화 끝
     0.65s  agent 발화 시작: 어떤 장르를 좋아하시나요? 취향에 맞는 드라마를 찾아드릴게요.
     0.65s  user  발화 끝
     0.68s  user  발화 시작: 네.
     0.68s  agent 발화 끝
     0.69s  user  발화 시작: 음… 코미디나 로맨스를 좋아해요.
     0.69s  user  발화 끝
     0.71s  agent 발화 시작: <ret> 죄송합니다. 현재 인기 있는 코미디나 로맨스 드라마에 대한 정보는 찾을 수 없습니다.
     0.71s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (no information found)
     0.71s  user  발화 끝
     0.76s  user  발화 시작: 아, 그렇군요. 그럼 요즘 날씨는 어때요?
     0.76s  agent 발화 끝
     0.79s  agent 발화 시작: <ret> 현재 서울의 날씨는 이십팔 점 삼도이고, 습도는 육십팔퍼센트, 풍속은 시속 사 점 일킬로미터입니다
     0.79s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Current weather in Seoul is 28.3°C, humidity 68%, wind 4
     0.79s  user  발화 끝
     0.85s  user  발화 시작: 네.
     0.85s  agent 발화 끝
     0.86s  user  발화 시작: 덥네요. 에어컨을 켜야겠어요.
     0.86s  user  발화 끝
     0.87s  agent 발화 시작: 네, 더운 날씨에는 에어컨이 필수죠. 시원하게 지내세요.
     0.87s  user  발화 끝
     0.90s  user  발화 시작: 맞아요.
     0.90s  agent 발화 끝
     0.90s  user  발화 시작: 네, 감사합니다. 혹시 다음 주…
     0.90s  user  발화 끝
     0.93s  user  발화 시작: …부산 가는 기차표 예매할 수 있을까요?
     0.93s  user  발화 끝
     0.95s  agent 발화 시작: 기차표 예매는 도와드릴 수 있지만, 먼저 출발 날짜와 시간을 알려주셔야 합니다.
     0.95s  user  발화 끝
     1.00s  agent 발화 끝
