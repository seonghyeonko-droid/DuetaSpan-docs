# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 무슨 정부 형태를 무정부주의자들이 싫어하는지 궁금해?
     3.00s  <ret> 발화 (turn1 첫 프레임)
     3.31s  agent 발화 시작: <ret> 음, 정치적 이상을 탐구하는 질문이라 흥미롭네. 지금은 정확한 답을 알려주기가 어렵다. 무정부주의
     3.42s  user  발화 끝
     4.20s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.93s]: (no information found)
    12.30s  agent 발화 끝
    12.63s  user  발화 시작: 아. 그럼 알츠하이머병은? 그게 정확히 뇌에 뭘 하는 거야?
    16.31s  agent 발화 시작: 정말 끔찍한 병이지, 많은 사람들에게 영향을 미치잖아.
    16.47s  user  발화 끝
    19.40s  <ret> 발화 (turn4 첫 프레임)
    19.63s  agent 발화 시작: <ret> 병리학을 이해하는 게 연구에 중요해. 알츠하이머병은 아밀로이드 플라크와 타우 단백질 엉킴 때문에 
    19.82s  agent 발화 끝
    20.76s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.02s]: Alzheimer’s disease is characterized by the buildup of amyloid plaques
    26.91s  user  발화 시작: 플라크랑 엉킴… 음, 그런 게 현미경으로 보이는 물리적인 거 맞아?
    26.95s  agent 발화 끝
    31.81s  agent 발화 시작: [laugh] 응, 그럼. 현미경으로 볼 수 있어.
    31.81s  user  발화 끝
    33.93s  <ret> 발화 (turn7 첫 프레임)
    34.01s  agent 발화 시작: <ret> 이런 변화를 시각적으로 확인하면 진단에 도움이 돼. 현미경 검사를 통해 뇌 조직 내에 플라크와 타
    34.07s  agent 발화 끝
    34.97s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.27s]: Microscopic examination of brain tissue reveals the presence of amyloi
    41.56s  agent 발화 끝
    41.81s  user  발화 시작: 그래. 그런데 만약 누군가 기억을 잘 못 하면, 그게 항상 알츠하이머병이야?
    46.37s  agent 발화 시작: 전혀 그렇지 않아. 기억 상실에는 여러 가지 원인이 있어.
    46.53s  user  발화 끝
    49.55s  <ret> 발화 (turn10 첫 프레임)
    49.60s  agent 발화 끝
    49.70s  agent 발화 시작: <ret> 원인을 구별하는 게 치료의 핵심이야. 스트레스, 우울증, 비타민 결핍 때문에 기억 상실이 생길 수
    51.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.22s]: Memory loss can be caused by a variety of factors, including stress, d
    52.95s  user  발화 시작: 응.
    53.39s  user  발화 끝
    56.60s  agent 발화 끝
    57.06s  user  발화 시작: 그럼, 치료할 수 있는 경우도 있다는 거야?
    59.38s  agent 발화 시작: 자주 그래. 기억 상실의 많은 원인은 되돌릴 수 있어.
    59.52s  user  발화 끝
    62.98s  agent 발화 끝
    63.52s  user  발화 시작: 그건… 다행이다. 그런데 그 엉킴은 어떡해야 해? 뭐 할 수 있는 거 있어?
    67.58s  user  발화 끝
    68.03s  agent 발화 시작: 아주 중요한 질문인데, 지금도 집중적으로 연구 중이야.
    71.11s  <ret> 발화 (turn16 첫 프레임)
    71.35s  agent 발화 시작: <ret> 연구는 엉킴 형성을 막는 데 초점을 맞추고 있어. 엉킴 형성을 막는 치료법이 현재 연구되고 있다.
    71.49s  agent 발화 끝
    71.61s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.72s]: Current research is exploring potential therapies to prevent the forma
    78.16s  agent 발화 끝
    78.44s  user  발화 시작: 알츠하이머병에 걸릴 수 있는 가장 어린 나이는 몇 살이야?
    81.58s  <ret> 발화 (turn18 첫 프레임)
    81.82s  agent 발화 시작: <ret> 초기 발병 사례는 비교적 드물어. 알츠하이머병은 65세 미만에게도 영향을 미칠 수 있지만 흔하지 
    81.91s  user  발화 끝
    83.02s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.42s]: Early-onset Alzheimer’s disease typically affects individuals younger 
    88.59s  agent 발화 끝
    88.75s  user  발화 시작: 그건… 어리네. 근데 보통 유전이야?
    92.37s  agent 발화 시작: 유전이 역할을 할 수도 있지만, 복잡해.
    92.40s  user  발화 끝
    95.03s  <ret> 발화 (turn21 첫 프레임)
    95.11s  agent 발화 시작: <ret> 가족력이 위험 요인이긴 해. 대부분의 경우는 직접적인 유전은 아니지만, 돌연변이가 영향을 줄 수 
    95.32s  agent 발화 끝
    96.08s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.38s]: While most cases of Alzheimer’s are sporadic, a small percentage are l
   101.88s  user  발화 시작: 저— 그럼, 할머니가 걸리셨다면, 나도 꼭 걸리는 건 아니라는 거야?
   101.88s  agent 발화 끝
   106.24s  agent 발화 시작: 아니, 전혀 그렇지 않아. 위험은 증가하지만, 보장하는 건 아니야.
   106.41s  user  발화 끝
   110.07s  agent 발화 끝
