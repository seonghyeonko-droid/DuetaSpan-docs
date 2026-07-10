# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "윤율",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "home",
#       "text": "User's home address is 585 Elm Street."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘. | S2 고마워, 정말 큰 도움이 됐어. 혹시… | S3 좋아. 그럼 혹시… 그 로프트에 반려동물 동반이 가능한지도 확 | S4 오크 애비뉴… 사백오십육번지… 아, 잠깐만, 사백오십칠번지로 

     0.00s  user  발화 시작: 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘.
     2.90s  <ret> 발화 (turn1 첫 프레임)
     3.13s  agent 발화 시작: <ret> 그랜드뷰 로프트 육월 십오일 오후 두시에 방문 예약을 잡아드렸어요. 즐거운 집 구경 되시길 바랍니
     3.32s  user  발화 끝
     4.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.99s]: (tool result) Viewing scheduled for June 15th at 2:00 PM.
    10.12s  agent 발화 끝
    11.28s  user  발화 시작: 잠깐만, 십오일은 안 돼. 십육일로 바꿔줘.
    13.56s  <ret> 발화 (turn3 첫 프레임)
    13.86s  user  발화 끝
    13.87s  agent 발화 시작: <ret> 육월 십육일 오후 두시로 예약 변경해 드렸습니다. 혹시 다른 시간대는 괜찮으신가요?
    15.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.99s]: (tool result) Viewing rescheduled for June 16th at 2:00 PM.
    20.82s  user  발화 시작: 아니, 두시 괜찮아. 그런데 혹시 그 근처에 주차 공간이 있는지 알아봐 줄 수 있어?
    20.86s  agent 발화 끝
    25.95s  <ret> 발화 (turn5 첫 프레임)
    26.35s  agent 발화 시작: <ret> 그랜드뷰 로프트 근처에는 거리 주차 공간이 제한적이고, 메인 스트리트 백이십삼번지에 주차장이 있는
    26.56s  user  발화 끝
    27.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: (tool result) Limited street parking available. Garage at 123 Main Str
    35.35s  user  발화 시작: 주차장이 더 편하겠네. 그럼 그 주차장 예약도 좀 해 줄래? 두시간 정도.
    35.53s  agent 발화 끝
    39.41s  <ret> 발화 (turn7 첫 프레임)
    39.70s  user  발화 끝
    39.72s  agent 발화 시작: <ret> 메인 스트리트 백이십삼번지 주차장 두시간 예약 완료되었습니다. 확인 번호는 칠 팔 구 사 오번입니
    41.33s  ⚡SPAN 주입 [d'=1.92s / d_lead=7.23s]: (tool result) Spot reserved at 123 Main Street. Confirmation number: 7
    46.94s  agent 발화 끝
    47.70s  user  발화 시작: 고마워, 정말 큰 도움이 됐어. 혹시…
    51.35s  user  발화 끝
    52.99s  user  발화 시작: …그 로프트 주변에 괜찮은 카페도 있을까?
    55.69s  <ret> 발화 (turn10 첫 프레임)
    55.77s  agent 발화 시작: <ret> 그랜드뷰 로프트 주변에는 커피빈이 영 점 이마일, 스타벅스가 영 점 오마일, 로컬 브루가 영 점 
    55.85s  user  발화 끝
    57.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: (tool result) "Coffee Bean" - 0.2 miles, "Starbucks" - 0.5 miles, "Loc
    61.09s  user  발화 시작: 어.
    61.49s  user  발화 끝
    63.78s  user  발화 시작: 로컬 브루가 제일 가까운 것 같네. 거기 메뉴 좀 알려줄 수 있어?
    63.88s  agent 발화 끝
    67.16s  user  발화 끝
    67.16s  <ret> 발화 (turn13 첫 프레임)
    67.23s  agent 발화 시작: <ret> 로컬 브루는 커피, 차, 페이스트리, 샌드위치를 판매하고, 자세한 메뉴는 localbrew.com
    68.60s  ⚡SPAN 주입 [d'=1.44s / d_lead=7.14s]: (tool result) Coffee, tea, pastries, sandwiches. Full menu at localbre
    74.32s  user  발화 시작: 좋아. 그럼 혹시… 그 로프트에 반려동물 동반이 가능한지도 확인해 줄 수 있을까?
    74.37s  agent 발화 끝
    79.22s  <ret> 발화 (turn15 첫 프레임)
    79.61s  agent 발화 시작: <ret> 그랜드뷰 로프트는 보증금 오십달러를 내면 반려동물 동반이 가능합니다.
    79.79s  user  발화 끝
    80.98s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.04s]: (tool result) Pets allowed with a $50 deposit.
    84.65s  agent 발화 끝
    84.77s  user  발화 시작: 아, 보증금이 있구나. 그럼 혹시 다른 로프트도 알아봐 줄 수 있어? 반려동물 보증금이 없는 곳으로.
    91.61s  <ret> 발화 (turn17 첫 프레임)
    91.92s  agent 발화 시작: <ret> 반려동물 보증금이 없는 파크사이드 레지던스가 육월 십육일에 입주 가능합니다.
    91.99s  user  발화 끝
    93.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: (tool result) "Parkside Residences" - no pet deposit, available June 1
    94.28s  user  발화 시작: 음.
    94.73s  user  발화 끝
    97.62s  agent 발화 끝
    97.63s  user  발화 시작: 파크사이드 레지던스… 음, 거기는 위치가 어때?
   100.85s  <ret> 발화 (turn20 첫 프레임)
   101.24s  agent 발화 시작: <ret> 파크사이드 레지던스는 오크 애비뉴 사백오십육번지에 위치해 있습니다.
   101.33s  user  발화 끝
   102.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.82s]: (tool result) 456 Oak Avenue.
   104.58s  user  발화 시작: 응.
   105.03s  user  발화 끝
   106.05s  agent 발화 끝
   106.18s  user  발화 시작: 오크 애비뉴… 사백오십육번지… 아, 잠깐만, 사백오십칠번지로 다시 찾아줘. 내가 잘못 말했어.
   113.08s  <ret> 발화 (turn23 첫 프레임)
   113.39s  agent 발화 시작: <ret> 파크사이드 레지던스는 오크 애비뉴 사백오십칠번지에 위치해 있습니다.
   113.55s  user  발화 끝
   115.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: (tool result) 457 Oak Avenue.
   118.34s  agent 발화 끝
   118.47s  user  발화 시작: 맞아, 사백오십칠번지. 그곳에 방문 예약을 잡아줘. 육월 십육일 오후 세시로.
   124.38s  <ret> 발화 (turn25 첫 프레임)
   124.53s  agent 발화 시작: <ret> 파크사이드 레지던스 육월 십육일 오후 세시에 방문 예약을 잡아드렸습니다.
   124.68s  user  발화 끝
   126.06s  ⚡SPAN 주입 [d'=1.68s / d_lead=5.61s]: (tool result) Viewing scheduled for June 16th at 3:00 PM.
   130.14s  agent 발화 끝
   132.38s  user  발화 시작: 정말 고마워, 덕분에 집 구하기가 훨씬 수월해졌어.
   136.25s  agent 발화 시작: 도움이 되었다니 기쁩니다. 새로운 시작을 응원할게요.
   136.32s  user  발화 끝
   140.19s  agent 발화 끝
