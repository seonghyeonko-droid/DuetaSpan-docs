# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "세린",
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
#       "date": "2026-06-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-06-10",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "work",
#       "text": "User works as a nurse."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-30",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 '어나더 신데렐라 스토리'에서 조이 파커 역을 누가 맡았 | S2 저는 날씨에 좀 예민해요. 특히 습도가 높으면… | S3 좋은 생각이네요. 음료는 다음에 마시기로 하고… | S4 혹시 영화 추천해 줄 수 있어요?

     0.00s  user  발화 시작: 혹시 '어나더 신데렐라 스토리'에서 조이 파커 역을 누가 맡았는지 알아요?
     4.14s  <ret> 발화 (turn1 첫 프레임)
     4.30s  agent 발화 시작: <ret> 음, 조이 파커 역은 드류 실리가 맡았답니다. 춤도 잘 추고 노래도 잘하죠.
     4.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.78s]: Drew Seeley.
     4.49s  user  발화 끝
     8.48s  user  발화 시작: 응.
     8.70s  user  발화 끝
    10.09s  agent 발화 끝
    11.01s  user  발화 시작: 아, 그렇군요. 실력파 배우인가 봐요.
    14.24s  user  발화 끝
    14.66s  agent 발화 시작: 네, 정말 다재다능한 분이세요. 연기뿐만 아니라 음악 활동도 활발하게 하시잖아요.
    17.51s  user  발화 시작: 어.
    18.01s  user  발화 끝
    19.99s  agent 발화 끝
    20.09s  user  발화 시작: 다른 영화에도 출연했는지 궁금해요.
    22.25s  <ret> 발화 (turn7 첫 프레임)
    22.33s  agent 발화 시작: <ret> 드류 실리는 '하이스쿨 뮤지컬 이'에도 출연했었어요. 춤추는 모습이 정말 인상적이었죠.
    22.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: Drew Seeley was also in High School Musical 2.
    22.54s  user  발화 끝
    28.07s  agent 발화 끝
    28.16s  user  발화 시작: 오, 그거 봤어요! 정말 재밌었죠.
    30.59s  <ret> 발화 (turn9 첫 프레임)
    30.66s  user  발화 끝
    30.91s  agent 발화 시작: <ret> [happy] 맞아요, 저도 정말 좋아했어요. 노래랑 춤이랑 완벽하게 어울렸잖아요.
    30.91s  ⚡SPAN 주입(IRRELEVANT) [d'=1.04s / d_lead=4.49s]: The current temperature in Anchorage, Alaska is 12.8°C, with clear ski
    35.38s  agent 발화 시작: 요즘 날씨가 정말 좋네요. 뭐, 저는 날씨에 민감하진 않지만요.
    35.40s  agent 발화 끝
    39.54s  agent 발화 끝
    40.72s  user  발화 시작: 저는 날씨에 좀 예민해요. 특히 습도가 높으면…
    45.19s  agent 발화 시작: 습도가 높으면 기운이 없으시죠? 저도 조금은 공감해요.
    45.34s  user  발화 끝
    49.53s  agent 발화 끝
    49.60s  user  발화 시작: 네, 좀 그래요. 혹시 오늘 서울 날씨는 어때요?
    52.29s  <ret> 발화 (turn14 첫 프레임)
    52.69s  agent 발화 시작: <ret> 지금 서울은 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 있어요.
    52.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    52.79s  user  발화 끝
    59.17s  agent 발화 끝
    59.30s  user  발화 시작: 꽤 덥겠네요.
    60.43s  agent 발화 시작: 네, 조금 더울 수도 있겠어요. 시원한 음료라도 한 잔 하시는 게 좋겠어요.
    60.59s  user  발화 끝
    62.12s  user  발화 시작: 응응.
    62.61s  user  발화 끝
    64.60s  agent 발화 끝
    64.72s  user  발화 시작: 좋은 생각이네요. 음료는 다음에 마시기로 하고…
    67.67s  agent 발화 시작: [curious] 다음은 언제쯤 생각하세요? 계획 세우는 걸 도와드릴까요?
    67.77s  user  발화 끝
    71.12s  user  발화 시작: 아니요, 괜찮아요. 그냥 생각 중이에요.
    71.19s  agent 발화 끝
    73.66s  user  발화 끝
    73.85s  agent 발화 시작: 그렇군요. 잠시 생각에 잠기는 시간도 필요하죠.
    74.95s  user  발화 시작: 응응.
    75.58s  user  발화 끝
    77.00s  agent 발화 끝
    77.02s  user  발화 시작: 맞아요. 가끔은 혼자만의 시간이 필요해요.
    80.38s  agent 발화 시작: [sigh] 정말 공감돼요. 저도 가끔은 조용히 혼자 생각하는 시간을 즐긴답니다.
    80.54s  user  발화 끝
    83.16s  user  발화 시작: 응.
    83.56s  user  발화 끝
    85.80s  agent 발화 끝
    86.30s  user  발화 시작: 혹시 영화 추천해 줄 수 있어요?
    88.14s  <ret> 발화 (turn27 첫 프레임)
    88.29s  agent 발화 시작: <ret> '에브리씽 에브리웨어 올 엣 원스'라는 영화를 추천해 드리고 싶어요. 이천이십이년에 개봉한 미국 
    88.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: "Everything Everywhere All at Once" is a 2022 American surrealist acti
    88.33s  user  발화 끝
    95.70s  agent 발화 끝
    96.29s  user  발화 시작: 음, 그 영화는 좀 전에 봤어요. 다른 거 없을까요?
   100.04s  user  발화 끝
   100.45s  agent 발화 시작: 아, 이미 보셨군요. 그럼 '미드나잇 인 파리'는 어떠세요? 로맨틱하고 재밌는 영화예요.
   106.57s  agent 발화 끝
   107.74s  user  발화 시작: '미드나잇 인 파리'… 한번 찾아봐야겠네요.
   110.61s  agent 발화 시작: 네, 꼭 한번 보세요. 분명 마음에 드실 거예요.
   110.69s  user  발화 끝
   113.94s  agent 발화 끝
