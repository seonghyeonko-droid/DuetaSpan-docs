# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "연아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-30",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-09",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 진 선생님, 혹시 가장 긴 단어가 뭔지 아세요? | S2 와, 정말 복잡하네요. 그런데 그 단어가 만들어진 배경이 있나 | S3 잠깐만요, 그 단어는 문장 아닌가요? 진짜 단어 중에 가장 긴 | S4 …전통 놀이도 추천해 주실 수 있나요?

     0.00s  user  발화 시작: 안녕하세요. 진 선생님, 혹시 가장 긴 단어가 뭔지 아세요?
     4.62s  <ret> 발화 (turn1 첫 프레임)
     4.94s  agent 발화 시작: <ret> 안녕하세요. 궁금하신 점이 있으시군요. 가장 긴 단어에 대해 알아봐 드릴게요.
     4.94s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.49s]: Pneumonoultramicroscopicsilicovolcanoconiosis is a word coined in 1935
     4.94s  user  발화 끝
    10.43s  agent 발화 시작: 가장 긴 단어는 폐렴규폐렴증이라고 합니다, 아주 미세한 규산 먼지를 흡입해서 생기는 폐 질환을 뜻해요.
    10.43s  agent 발화 끝
    18.12s  user  발화 시작: 네.
    18.12s  agent 발화 끝
    18.67s  user  발화 시작: 폐렴규폐렴증이라… 발음하기도 어렵네요. 그 단어가 진짜 사전에 있는 단어예요?
    18.67s  user  발화 끝
    23.61s  agent 발화 시작: 네, 실제로 사전에 등재된 단어입니다. 천구백삼십오년에 만들어졌다고 해요.
    23.61s  user  발화 끝
    28.00s  user  발화 시작: 신기하네요. 그럼 그 단어 말고, 사람들이 흔히 쓰는 단어 중에 가장 긴 단어는 뭔가요?
    28.00s  agent 발화 끝
    35.28s  <ret> 발화 (turn7 첫 프레임)
    35.68s  agent 발화 시작: <ret> 흔히 쓰는 단어 중 가장 긴 단어는 긴 단어 공포증, 즉 히포포토몬스트로세스키페달리오포비아라고 합
    35.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: Hippopotomonstrosesquippedaliophobia is the name for the fear of long 
    35.68s  user  발화 끝
    42.82s  user  발화 시작: 긴 단어 공포증이라니, 아이러니하네요! 혹시 그 단어의 뜻을 다시 한번 설명해 주실 수 있을까요?
    42.82s  agent 발화 끝
    50.51s  agent 발화 시작: 음.
    50.51s  user  발화 끝
    51.05s  agent 발화 시작: 긴 단어 공포증은 긴 단어를 두려워하는 증세를 뜻하는 단어입니다.
    51.05s  agent 발화 끝
    56.00s  user  발화 시작: 와, 정말 복잡하네요. 그런데 그 단어가 만들어진 배경이 있나요?
    56.00s  agent 발화 끝
    60.70s  <ret> 발화 (turn12 첫 프레임)
    60.94s  agent 발화 시작: <ret> 그 단어는 아이러니의 예시로, 의도적으로 영어에서 가장 긴 단어 중 하나가 되도록 만들어졌다고 합
    60.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: The word hippopotomonstrosesquippedaliophobia was deliberately created
    60.94s  user  발화 끝
    68.62s  user  발화 시작: 의도적으로 만들었다고요? 누가 만든 거예요?
    68.62s  agent 발화 끝
    71.37s  agent 발화 시작: 그 단어를 누가 처음 만들었는지는 정확히 알려져 있지 않습니다.
    71.37s  user  발화 끝
    76.31s  user  발화 시작: 아, 그렇군요. 그럼 혹시 한국어에서 가장 긴 단어가 뭔지 아세요?
    76.31s  agent 발화 끝
    81.64s  <ret> 발화 (turn16 첫 프레임)
    81.80s  agent 발화 시작: <ret> 한국어에서 가장 긴 단어는 기러기아저씨가구겨진빨간색모자를쓰고빙판길을넘어갈때라고 합니다—
    81.80s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.29s]: The longest Korean word is 기러기아저씨가구겨진빨간색모자를쓰고빙판길을넘어갈때, which translate
    81.80s  user  발화 끝
    85.09s  user  발화 시작: 잠깐만요, 그 단어는 문장 아닌가요? 진짜 단어 중에 가장 긴 건 없어요?
    85.09s  agent 발화 끝
    91.44s  <ret> 발화 (turn18 첫 프레임)
    91.68s  agent 발화 시작: <ret> 아, 네. 맞습니다. 말씀하신 대로 그 단어는 문장이지, 단어는 아닙니다.
    91.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.49s]: The longest generally accepted single Korean word is 윷놀이판, meaning a Y
    91.68s  user  발화 끝
    97.17s  agent 발화 시작: 일반적으로 인정되는 가장 긴 단어는 윷놀이판이라고 합니다, 윷놀이판을 뜻해요.
    97.17s  agent 발화 끝
   102.11s  user  발화 시작: 윷놀이판이군요. 생각보다 짧네요. 그럼 윷놀이는 언제부터 시작된 건가요?
   102.11s  agent 발화 끝
   106.10s  <ret> 발화 (turn21 첫 프레임)
   106.50s  agent 발화 시작: <ret> 윷놀이는 삼국시대, 기원전 오십칠년부터 서기 육백육십팔년 사이에 시작된 것으로 추정됩니다.
   106.50s  ⚡SPAN 주입 [d'=1.92s / d_lead=5.49s]: Yut Nori is believed to have originated during the Three Kingdoms peri
   106.50s  user  발화 끝
   111.99s  user  발화 시작: 와.
   111.99s  agent 발화 끝
   112.54s  user  발화 시작: 삼국시대부터라니, 정말 오래됐네요. 윷놀이 말고 다른…
   112.54s  user  발화 끝
   115.83s  user  발화 시작: …전통 놀이도 추천해 주실 수 있나요?
   115.83s  user  발화 끝
   119.13s  agent 발화 시작: 연날리기나 제기차기 같은 전통 놀이도 재미있을 거예요.
   119.13s  user  발화 끝
   122.97s  user  발화 시작: 연날리기요? 연날리기는 언제 하는 게 좋을까요?
   122.97s  agent 발화 끝
   126.02s  <ret> 발화 (turn27 첫 프레임)
   126.26s  agent 발화 시작: <ret> 한국에서 연날리기를 하기에 가장 좋은 시기는 강하고 차가운 바람이 부는 겨울철입니다.
   126.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.04s]: The best time to fly kites in Korea is during the winter months, when 
   126.26s  user  발화 끝
   132.30s  user  발화 시작: 겨울이군요. 알겠습니다. 오늘 정말 유익한 시간을 보냈어요. 감사합니다.
   132.30s  agent 발화 끝
   136.69s  agent 발화 시작: 도움이 되었다니 기쁩니다.
   136.69s  user  발화 끝
   138.34s  agent 발화 끝
