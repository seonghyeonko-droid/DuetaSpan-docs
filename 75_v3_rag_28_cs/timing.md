# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕. 천연가스에 대해 읽어봤는데… 복잡하더라. 대체 어디에서 나오는 거야?
     6.95s  user  발화 끝
     7.37s  agent 발화 시작: 복잡한 주제긴 하지. 천연가스는 여러 기원을 가지고 있는데, 꽤 오래된 것들도 있어.
    13.21s  agent 발화 끝
    13.32s  user  발화 시작: 오래됐다고? 공룡 시대만큼 오래됐어?
    16.55s  agent 발화 시작: 공룡이라고 하긴 좀 어렵고, 유기물이 중요해. 그거보다 조금 더 복잡해.
    16.55s  user  발화 끝
    21.50s  agent 발화 끝
    21.78s  user  발화 시작: 복잡하다니? 무슨 뜻이야? 결국 다 썩은 선사시대 생물 아니야?
    26.17s  <ret> 발화 (turn5 첫 프레임)
    26.77s  user  발화 끝
    26.77s  agent 발화 시작: <ret> 그 부분은 좀 짚고 넘어가야겠네. 석탄층에 있는 천연가스는 수백만 년에 걸쳐 식물 잔해에서 만들어
    27.13s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.09s]: Coal beds contain substantial amounts of natural gas, formed from deca
    34.09s  agent 발화 끝
    34.41s  user  발화 시작: 아, 식물도 있구나. 근데 기름이 더 중요하다고 생각했는데.
    38.24s  agent 발화 시작: 기름하고 가스는 같이 발견되는 경우도 많지만, 기원은 조금 달라. 천연가스는 독립적인 기원을 가지고 있어.
    38.43s  user  발화 끝
    45.79s  agent 발화 끝
    46.54s  user  발화 시작: 독립적인 기원? 식물이 석탄으로 변하는 것 말고 또 뭐가 있어?
    50.77s  <ret> 발화 (turn9 첫 프레임)
    51.35s  user  발화 끝
    51.37s  agent 발화 시작: <ret> 또 다른 중요한 출처가 있어. 생물 기원 천연가스는 미생물이 유기물에 작용해서 만들어져.
    51.73s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.04s]: Some natural gas is biogenic, created by the metabolic action of micro
    57.47s  user  발화 시작: 미생물? 세균 같은 거? 생각보다 안 예상했네.
    57.49s  agent 발화 끝
    60.85s  agent 발화 시작: 그렇지. 아주 작은 생명체가 지질학적 시간 규모에 얼마나 큰 영향을 미치는지 보여주는 증거야.
    60.89s  user  발화 끝
    67.61s  agent 발화 끝
    68.82s  user  발화 시작: 그러니까, 어떤 건 고대 식물이고, 어떤 건… 세균 똥이야?
    73.54s  agent 발화 시작: [laugh] 꽤 재밌는 표현이네. 물론 과정은 더 복잡하지만, 본질은 맞아.
    73.58s  user  발화 끝
    78.68s  agent 발화 끝
    78.80s  user  발화 시작: 알았어, 알았어. 그럼 깊은 지하에서는? 그건 또 다른 건가?
    82.30s  <ret> 발화 (turn15 첫 프레임)
    82.90s  agent 발화 시작: <ret> 깊은 지하 가스는 기원이 달라. 열과 압력으로 유기물이 변해서 열생성 천연가스가 만들어져.
    83.01s  user  발화 끝
    83.30s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.57s]: Thermogenic natural gas is formed deep underground from organic matter
    89.02s  agent 발화 끝
    89.26s  user  발화 시작: 열과 압력… 그럼 바위에서 쥐어짜내는 건가?
    92.63s  user  발화 끝
    92.73s  agent 발화 시작: 대충 맞아. 그런 조건에서 유기물은 수천 년에 걸쳐 가스로 변해.
    97.26s  user  발화 시작: 수천 년… 그럼 모든 출처가 엄청 오래됐다는 거야?
    97.36s  agent 발화 끝
   101.01s  user  발화 끝
   101.44s  agent 발화 시작: 맞아. 수백만 년에 걸쳐 일어나는 과정을 말하는 거야. 천천히 축적되는 거지.
   106.44s  agent 발화 끝
   106.78s  user  발화 시작: 생각해보면 정말 놀랍다.
   108.59s  agent 발화 시작: 그렇지. 지구 안에 담긴 깊은 역사를 보여주는 것 같아. 정말 흥미로운 연구 분야야.
   108.75s  user  발화 끝
   114.01s  agent 발화 끝
   114.25s  user  발화 시작: 이런 고대 가스랑 아프리카 무역로가 무슨 상관이 있어?
   117.30s  <ret> 발화 (turn23 첫 프레임)
   117.90s  agent 발화 시작: <ret> 실제로 흥미로운 연결고리가 있어. 가나 왕국은 소금과 금 무역로를 장악해서 권력에 영향을 미쳤어.
   117.96s  user  발화 끝
   118.30s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.14s]: The ancient Kingdom of Ghana controlled extensive salt and gold trade 
   124.71s  agent 발화 끝
   124.76s  user  발화 시작: 소금과 금? 그게 가스랑 무슨 상관이야?
   127.86s  agent 발화 시작: 소금에 대한 수요와 소금을 얻는 방법이 가스 샘 근처의 정착 패턴에 영향을 줬어.
   127.95s  user  발화 끝
   133.26s  user  발화 시작: 가스 샘? 사람들이 그냥 땅에서 가스가 솟아오르는 걸 발견했다는 거야?
   133.61s  agent 발화 끝
   137.71s  <ret> 발화 (turn27 첫 프레임)
   138.30s  agent 발화 시작: <ret> 맞아, 천연가스 샘은 잘 알려져 있었어. 고대 이집트인들은 기원전 1500년경 종교 의식에서 샘에
   138.45s  user  발화 끝
   138.71s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.30s]: Ancient Egyptians utilized natural gas seeps for burning in religious 
   147.11s  agent 발화 끝
   147.28s  user  발화 시작: 와. 진짜 오래됐네. 수천 년 전에 가스를 태웠다고.
   151.45s  agent 발화 시작: 정말 고대에도 인간의 독창성과 관찰력이 뛰어났다는 걸 보여주는 증거야.
   151.63s  user  발화 끝
   156.61s  user  발화 시작: 그들은 기름을 찾은 게 아니라 그냥… 불을 찾은 거야?
   156.68s  agent 발화 끝
   159.85s  user  발화 끝
   160.00s  agent 발화 시작: 주로 불이었지. 물론 그 구성에 대한 이해는 훨씬 나중에 온 거지만.
   164.50s  user  발화 시작: 우리가 얼마나 오랫동안 그것과 상호 작용해 왔는지 생각하면 놀라워.
   164.54s  agent 발화 끝
   169.59s  agent 발화 시작: 그렇지. 인류와 지구 자원 간의 오랜 관계를 강조하는 것 같아.
   169.68s  user  발화 끝
   173.75s  agent 발화 끝
   173.94s  user  발화 시작: 땅속에 뭐가 있는지 뿐만 아니라, 사람들이 과거에 어떻게 그것과 함께 살았는지도 중요한 것 같아.
   180.81s  agent 발화 시작: 맞아. 지질학적 이야기와 인간 이야기는 불가분의 관계에 있는 것 같지 않아?
   180.88s  user  발화 끝
   185.35s  agent 발화 끝
