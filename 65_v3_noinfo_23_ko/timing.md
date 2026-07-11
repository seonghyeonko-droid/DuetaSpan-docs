# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "수경",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-30",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-11-02",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 드레나 씨, 안녕하세요. 서울에서 부산으로 이사 왔는데, 혹시 | S2 광안리 해수욕장도요? 야경이 예쁘다니, 저녁에도 가봐야겠네요. | S3 해산물 전문점이라… 좋네요! | S4 …감천문화마을이요? 그곳은 어떤 곳인가요?

     0.00s  user  발화 시작: 드레나 씨, 안녕하세요. 서울에서 부산으로 이사 왔는데, 혹시 부산에서 유명한 해변을 알려줄 수 있을까요?
     6.35s  agent 발화 시작: 안녕하세요! 부산으로 오신 걸 환영해요. 부산은 아름다운 해변이 정말 많은 곳이죠.
     6.53s  user  발화 끝
     9.29s  user  발화 시작: 네네.
     9.79s  user  발화 끝
    11.95s  agent 발화 끝
    12.14s  user  발화 시작: 네, 정말 기대돼요. 그런데 제가 아직 부산에 대해 잘 몰라서요.
    16.73s  agent 발화 시작: 제가 도와드릴게요. 어떤 분위기의 해변을 좋아하시나요? 조용하고 한적한 곳을 원하시는지, 아니면 활기 넘치는
    16.77s  user  발화 끝
    22.35s  user  발화 시작: 네.
    22.80s  user  발화 끝
    26.56s  agent 발화 끝
    27.61s  user  발화 시작: 음… 활기 넘치는 곳이 좋을 것 같아요. 젊은 사람들이 많이 찾는 곳이면 더 좋고요.
    33.91s  <ret> 발화 (turn7 첫 프레임)
    34.15s  agent 발화 시작: <ret> 부산에서 가장 유명한 해운대 해수욕장은 길이가 일 점 오킬로미터에 달하고, 매년 수백만 명의 방문
    34.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=15.35s]: Haeundae Beach is Busan’s most famous beach, stretching 1.5 kilometers
    34.33s  user  발화 끝
    40.23s  user  발화 시작: 진짜요?
    40.91s  user  발화 끝
    49.50s  agent 발화 끝
    49.67s  user  발화 시작: 와, 정말 좋네요. 해운대 해수욕장, 꼭 가봐야겠어요!
    54.20s  user  발화 끝
    54.61s  agent 발화 시작: 해운대 해수욕장 외에도 광안리 해수욕장도 추천해 드려요. 야경이 정말 아름다운 곳이랍니다.
    61.09s  agent 발화 끝
    61.40s  user  발화 시작: 광안리 해수욕장도요? 야경이 예쁘다니, 저녁에도 가봐야겠네요.
    65.92s  agent 발화 시작: 네, 광안리 해수욕장에서는 광안대교를 배경으로 멋진 사진을 찍을 수 있어요.
    66.08s  user  발화 끝
    68.46s  user  발화 시작: 아.
    68.77s  user  발화 끝
    70.97s  agent 발화 끝
    71.20s  user  발화 시작: 혹시 해운대 해수욕장 근처에 맛집도 알려주실 수 있나요?
    74.95s  <ret> 발화 (turn15 첫 프레임)
    75.18s  agent 발화 시작: <ret> 죄송하지만, 해운대 해수욕장 근처의 특정 맛집 정보는 찾을 수 없었어요. 하지만 해운대에는 다양한
    75.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.66s]: (no information found)
    75.22s  user  발화 끝
    85.84s  agent 발화 끝
    86.80s  user  발화 시작: 아, 아쉽네요. 그럼 다른 해변 근처 맛집은 어떨까요?
    90.97s  user  발화 끝
    91.11s  agent 발화 시작: 다른 해변 근처 맛집도 찾아볼까요? 어떤 해변을 말씀하시는 건가요?
    93.01s  user  발화 시작: 그렇죠.
    93.46s  user  발화 끝
    95.69s  agent 발화 끝
    95.89s  user  발화 시작: 광안리 해수욕장 근처 맛집을 찾아주세요.
    98.20s  <ret> 발화 (turn20 첫 프레임)
    98.44s  agent 발화 시작: <ret> 광안리 해수욕장 근처에는 해산물 전문점이 많아서 신선한 해산물을 맛볼 수 있고, 광안대교를 바라보
    98.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.95s]: Gwangalli Beach is known for its seafood restaurants, offering fresh c
    98.57s  user  발화 끝
   102.66s  user  발화 시작: 네.
   103.06s  user  발화 끝
   107.39s  agent 발화 끝
   107.82s  user  발화 시작: 해산물 전문점이라… 좋네요!
   110.92s  agent 발화 시작: 네, 특히 저녁에 광안대교 야경을 보면서 해산물을 드시면 정말 낭만적일 거예요.
   111.05s  user  발화 끝
   116.92s  user  발화 시작: 혹시 부산에서 대중교통 이용하기 편리한가요?
   116.93s  agent 발화 끝
   119.59s  agent 발화 시작: 네, 부산은 대중교통 시스템이 잘 갖춰져 있어서 지하철과 버스를 이용하기 편리해요.
   119.74s  user  발화 끝
   124.75s  user  발화 시작: 지하철 노선도를 보여줄 수 있나요?
   125.05s  agent 발화 끝
   126.69s  <ret> 발화 (turn27 첫 프레임)
   126.83s  agent 발화 시작: <ret> 부산 지하철 노선도는 네이버 지도에서 확인하실 수 있습니다. 링크는 이 주소예요: https://
   126.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.95s]: (tool result) Busan Subway Map: https://map.naver.com/v5/search?query=
   126.91s  user  발화 끝
   131.51s  user  발화 시작: 음.
   131.87s  user  발화 끝
   135.78s  agent 발화 끝
   137.48s  user  발화 시작: 감사합니다. 그런데 혹시 부산에서 외국인들이 많이 찾는 관광지도 있나요?
   142.62s  user  발화 끝
   143.03s  agent 발화 시작: 네, 태종대, 감천문화마을, 자갈치시장 등이 외국인들에게 인기가 많아요—
   148.12s  user  발화 시작: …감천문화마을이요? 그곳은 어떤 곳인가요?
   148.78s  agent 발화 끝
   151.19s  agent 발화 시작: 감천문화마을은 예전에 가난했던 동네를 예술가들이 아름답게 꾸며 놓은 곳이에요. 알록달록한 집들과 골목길이 정
   151.35s  user  발화 끝
   161.34s  agent 발화 끝
   161.37s  user  발화 시작: 와, 사진 찍기 정말 좋을 것 같네요!
   163.39s  agent 발화 시작: 네, 사진 찍기 좋은 곳이 많아요. 그리고 감천문화마을에서는 다양한 예술 작품도 감상할 수 있답니다.
   163.44s  user  발화 끝
   168.18s  user  발화 시작: 네.
   168.53s  user  발화 끝
   170.43s  user  발화 시작: 정말 가보고 싶네요. 혹시 감천문화마을 가는 방법도 알려주실 수 있나요?
   170.52s  agent 발화 끝
   174.27s  <ret> 발화 (turn37 첫 프레임)
   174.50s  agent 발화 시작: <ret> 감천문화마을은 남포동에서 버스를 타고 갈 수 있어요. 일 일번, 백일번, 백팔십오번 버스가 자주 
   174.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: Gamcheon Culture Village is accessible by bus from Nampo-dong, with bu
   174.68s  user  발화 끝
   181.95s  user  발화 시작: 음.
   182.31s  user  발화 끝
   184.47s  user  발화 시작: 감사합니다. 드레나 씨 덕분에 부산 여행 계획을 세우는 데 큰 도움이 됐어요.
   184.47s  agent 발화 끝
   189.84s  user  발화 끝
   190.25s  agent 발화 시작: 다행이에요. 부산에서 즐거운 시간 보내세요!
   193.02s  agent 발화 끝
